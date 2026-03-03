package utils

import (
	"encoding/json"
	"fmt"
)

func Dump(item any) {
	var p []byte

	p, err := json.MarshalIndent(item, "", "\t")

	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Printf("%s \n", p)
}
