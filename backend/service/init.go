package service

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func SqlConnect() (db *gorm.DB, err error) {
	CONNECT := "ucchy:password@tcp(db:3306)/sample_db"
	return gorm.Open("mysql", CONNECT)
}
