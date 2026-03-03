package logic

import (
	"bufio"
	"fmt"
	Structs "ixfredocs/internal/structs"
	"log"
	"os"

	"github.com/jszwec/csvutil"
)

func openFile(path string) *os.File {
	file, err := os.Open(path)

	if err != nil {
		log.Fatal("unable to open selected file", err)

		return nil
	}

	return file
}

func ListData(path string) ([]Structs.Patient, error) {
	file := openFile(path)

	defer file.Close()

	// reader := csv.NewReader(file)

	// decoder, err := csvutil.NewDecoder(reader)

	stat, _ := file.Stat()

	bs := make([]byte, stat.Size())

	_, err := bufio.NewReader(file).Read(bs)

	if err != nil {
		fmt.Println("list List bufio.NewReader.Read error", err)
		return []Structs.Patient{}, err
	}

	var patients []Structs.Patient

	if err := csvutil.Unmarshal(bs, &patients); err != nil {
		fmt.Println("list List csvutil.Unmarshall error", err)
		return patients, err
	}

	// for {
	// 	if err := decoder.Decode(&patients); err == io.EOF {
	// 		fmt.Println(err)

	// 		break
	// 	}
	// }

	return patients, nil
}

func GetFileContent(path string) ([]Structs.MedicalData, error) {
	file := openFile(path)

	defer file.Close()

	stat, _ := file.Stat()

	bs := make([]byte, stat.Size())

	_, err := bufio.NewReader(file).Read(bs)

	if err != nil {
		fmt.Println("list GetFileContent bufio.NewReader.Read error", err)

		return []Structs.MedicalData{}, err
	}

	var data []Structs.MedicalData

	if err := csvutil.Unmarshal(bs, &data); err != nil {
		fmt.Println("list GetFileContwent csvutil.Unmarshall error", err)

		return data, err
	}

	return data, nil
}
