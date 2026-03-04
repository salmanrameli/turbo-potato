package main

import (
	"context"
	"encoding/json"
	"fmt"
	Constants "ixfredocs/internal/constants"
	logic "ixfredocs/internal/logic/csv"
	Standards "ixfredocs/internal/standards"
	Structs "ixfredocs/internal/structs"
	"os"
	"reflect"
	"time"

	"github.com/google/uuid"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	userConfigDir, err := os.UserConfigDir()

	if err != nil {
		fmt.Println("unable to locate user config directory", err)

		return
	}

	projectsPath := userConfigDir + Constants.APP_USER_CONFIG_DIR
	projectsFileName := "/" + Constants.PROJECTS_FILE_NAME

	fmt.Println("app user config directory: " + projectsPath + projectsFileName)

	_, err = os.Stat(projectsPath + projectsFileName)

	if os.IsNotExist(err) {
		fmt.Println("file not found, creating a new one...")

		if err := os.Mkdir(projectsPath, os.ModePerm); err != nil {
			fmt.Println("app startup error in creating application project directory", err)

			return
		}

		file, err := os.Create(projectsPath + projectsFileName)

		if err != nil {
			fmt.Println("app startup error in creating projects path file", err)

			return
		}

		defer file.Close()
	} else {
		fileInfo, err := os.Stat(projectsPath + projectsFileName)

		if err != nil {
			if os.IsNotExist(err) {
				fmt.Println("app startup os.Stat file does not exists,", err)

				return
			}
		}

		if fileInfo.Size() > 0 {
			file, err := os.ReadFile(projectsPath + projectsFileName)

			if err != nil {
				fmt.Println("app startup path exists but unable to open file", err)

				return
			}

			var projectsJsonData []Structs.Project

			if err = json.Unmarshal(file, &projectsJsonData); err != nil {
				fmt.Println("app startup unable to read file content", err)

				return
			}

			for _, item := range projectsJsonData {
				a.ctx = context.WithValue(ctx, item.ID, item.Path)
			}
		}
	}
}

func (a *App) SelectFile(ctx context.Context) (string, error) {
	path, err := runtime.OpenFileDialog(ctx, runtime.OpenDialogOptions{
		Title: "Select File",
		Filters: []runtime.FileFilter{
			{
				DisplayName: "CSV",
				Pattern:     "*.csv",
			},
		},
	})

	if err != nil {
		return "", err
	}

	return path, nil
}

func (a *App) getAppPath() (string, string) {
	userConfigDir, err := os.UserConfigDir()

	if err != nil {
		fmt.Println("unable to locate user config directory", err)

		return "", ""
	}

	projectsPath := userConfigDir + Constants.APP_USER_CONFIG_DIR
	projectsFileName := "/" + Constants.PROJECTS_FILE_NAME

	return projectsPath, projectsFileName
}

func (a *App) ListProjects() []Structs.Project {
	projectsPath, projectsFileName := a.getAppPath()

	file, err := os.ReadFile(projectsPath + projectsFileName)

	if err != nil {
		fmt.Println("path exists but unable to open file", err)

		return []Structs.Project{}
	}

	var projectsJsonData []Structs.Project

	if err = json.Unmarshal(file, &projectsJsonData); err != nil {
		fmt.Println("unable to read file content", err)

		return []Structs.Project{}
	}

	projects := make([]Structs.Project, len(projectsJsonData)-1)

	for _, item := range projectsJsonData {
		if item.Name != "" && item.ID != "" && item.Path != "" {
			projects = append(projects, Structs.Project{
				ID:          item.ID,
				Name:        item.Name,
				Path:        item.Path,
				DateCreated: item.DateCreated,
			})
		}
	}

	return projects
}

func (a *App) Dump(item any) {
	prettyPrint(item)
}

func (a *App) GetPathFromID(id string) string {
	path := ""

	ref := reflect.ValueOf(a.ctx.Value(id))

	if ref.Kind() == reflect.String {
		path = ref.String()
	}

	return path
}

func (a *App) ListData(id string) ([]Structs.Patient, error) {
	path := a.GetPathFromID(id)

	if path == "" {
		fmt.Println("app ListData path not found")

		return []Structs.Patient{}, nil
	}

	patients, err := logic.ListData(path)

	if err != nil {
		fmt.Println("app List unable to list patients", err)

		return nil, err
	}

	return patients, err
}

func (a *App) GetFileContent(id string) (map[string]Structs.MedicalData, error) {
	path := a.GetPathFromID(id)

	if path == "" {
		fmt.Println("app GetFileContent path not found")

		return nil, nil
	}

	medicalData, err := logic.GetFileContent(path)

	if err != nil {
		fmt.Println("app GetFileContent logic.GetData error", err)

		return nil, err
	}

	var data = make(map[string]Structs.MedicalData, len(medicalData))

	for _, item := range medicalData {
		data[item.Patient.ID] = item
	}

	return data, nil
}

func (a *App) GetBaseline() Structs.IndicatorBaseline {
	return *Standards.StandardIndicators
}

func (a *App) SelectFileNewProject() string {
	path, err := a.SelectFile(a.ctx)

	if err != nil {
		fmt.Println("app SelectFileNewProject error", err)

		return ""
	}

	return path
}

func (a *App) SaveProject(name string, path string) error {
	if name == "" || path == "" {
		return nil
	}

	projects := a.ListProjects()

	projects = append(projects, Structs.Project{
		ID:          uuid.New().String(),
		Name:        name,
		Path:        path,
		DateCreated: time.Now().Unix(),
	})

	jsonString, err := json.Marshal(projects)

	if err != nil {
		fmt.Println("app SaveProject json.Marshal error", err)

		return err
	}

	projectsPath, projectsFileName := a.getAppPath()

	err = os.WriteFile(projectsPath+projectsFileName, jsonString, os.ModePerm)

	if err != nil {
		fmt.Println("app SaveProject os.WriteFile error", err)

		return err
	}

	return nil
}
