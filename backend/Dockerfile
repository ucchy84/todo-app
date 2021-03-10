FROM golang:1.16-alpine

WORKDIR /go/

RUN apk update && apk add --no-cache git curl

RUN go get github.com/go-sql-driver/mysql
RUN go get github.com/jinzhu/gorm
RUN go get github.com/gorilla/mux
