package main

import (
	"embed"
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io"
	Constants "ixfredocs/internal/constants"
	Structs "ixfredocs/internal/structs"
	"log"
	"os"
	"runtime"

	"github.com/jszwec/csvutil"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/menu"
	"github.com/wailsapp/wails/v2/pkg/menu/keys"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

// type Header struct {
// 	Haemoglobin string `csv:"Haemoglobin"`
// }

func main() {
	// Create an instance of the app structure
	app := NewApp()

	AppMenu := menu.NewMenu()

	if runtime.GOOS == "darwin" {
		AppMenu.Append(menu.AppMenu())
	}

	FileMenu := AppMenu.AddSubmenu("File")

	FileMenu.AddText("Open", keys.CmdOrCtrl("o"), func(item *menu.CallbackData) {
		path, err := app.SelectFile(app.ctx)

		if err != nil {
			fmt.Println(err)

			return
		}

		fmt.Println(path)

		file, err := os.Open(path)

		if err != nil {
			log.Fatal("unable to open selected file", err)

			return
		}

		defer file.Close()

		reader := csv.NewReader(file)

		decoder, err := csvutil.NewDecoder(reader)

		// headers := decoder.Header()

		var records []Structs.MedicalData

		for {
			if err := decoder.Decode(&records); err == io.EOF {
				fmt.Println(err)

				break
			} else {
				fmt.Println(err)

				break
			}
		}

		prettyPrint(records[0])
	})

	if runtime.GOOS == "darwin" {
		AppMenu.Append(menu.EditMenu())
	}

	// Create application with options
	err := wails.Run(&options.App{
		Title:  Constants.APPNAME,
		Width:  800,
		Height: 600,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
		Menu: AppMenu,
	})

	if err != nil {
		println("Error:", err.Error())
	}
}

func prettyPrint(data interface{}) {
	var p []byte

	p, err := json.MarshalIndent(data, "", "\t")

	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Printf("%s \n", p)
}
