package main

import (
	"fmt"
	"io/ioutil"
	"sort"
	"strconv"
	"strings"
)

func echo(str string) {
	fmt.Println(str)
}

func main() {
	data, _ := ioutil.ReadFile("data.txt")
	result := strings.Split(string(data), "\n")
	stuff := 0
	a := []int{}
	for _, item := range result {
		cal, _ := strconv.Atoi(item)
		stuff = stuff + cal
		if item == "" {
			a = append(a, stuff)
			echo(fmt.Sprint(stuff))
			stuff = 0
		}
	}
	sort.Ints(a)
	echo(fmt.Sprint(a[len(a)-1] + a[len(a)-2] + a[len(a)-3]))
}
