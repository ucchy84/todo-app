package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Diary struct {
	ID    int    `gorm:"primary_key" json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
}

func FindAllDiaries(diaries *[]Diary) {
	Db.Find(&diaries)
}

func FindDiary(diary *Diary, key string) {
	Db.First(&diary, key)
}

func InsertDiary(diary *Diary) {
	Db.NewRecord(diary)
	Db.Create(&diary)
}

func DeleteDiary(key string) {
	Db.Where("id = ?", key).Delete(&Diary{})
}

func UpdateDiary(diary *Diary, key string) {
	Db.Model(&diary).Where("id = ?", key).Updates(
		map[string]interface{}{
			"Title": diary.Title,
			"Body":  diary.Body,
		})
}

func init() {
	var err error
	Db, err = gorm.Open("mysql", "ucchy:password@tcp(mysql:3306)/todo_database")
	if err != nil {
		panic(err.Error)
	}

	Db.Set("gorm:table_options", "ENGINE = InnoDB").AutoMigrate(&Diary{})
	if err != nil {
		panic(err.Error)
	}
}
