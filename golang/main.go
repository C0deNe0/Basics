package main

import (
	"bytes"
	"fmt"
	"io"
	"log"
	"os"
)

func getLineChannel(f io.ReadCloser) <-chan string {
	// this is a simple implementation of a line reader, it reads from the file and sends the lines to the channel
	out := make(chan string, 1)

	// we can use a goroutine to read from the file and send the lines to the channel, this way we can read from the file in a non-blocking way
	go func() {

		defer f.Close()
		defer close(out)

		str := ""
		for {
			data := make([]byte, 8)
			n, err := f.Read(data)
			if err != nil {
				break
			}
			//this is important, otherwise the data will contain the old data from the previous read
			data = data[:n]

			if i := bytes.IndexByte(data, '\n'); i != -1 {
				str += string(data[:i])
				data = data[i+1:]
				out <- str
				str = ""
			}
			str += string(data)
		}

		if len(str) != 0 {
			out <- str
		}
	}()

	return out

}

func main() {
	f, err := os.Open("test.txt")
	if err != nil {
		log.Fatal("error", "error", err)
	}

	lines := getLineChannel(f)
	for line := range lines {
		fmt.Printf("read: %s\n", line)
	}
}
