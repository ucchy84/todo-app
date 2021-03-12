package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Todo struct {
	ID   uint   `gorm:"primary_key" json:"id"`
	Task string `gorm:"size:255" json:"task,pomitempty"`
}

var Db *gorm.DB

func FindAllTodos(todos *[]Todo) {
	Db.Find(&todos)
}

func FindTodo(todo *Todo, key string) {
	Db.First(&todo, key)
}

func InsertTodo(todo *Todo) {
	Db.NewRecord(todo)
	Db.Create(&todo)
}

func DeleteTodo(key string) {
	Db.Where("id = ?", key).Delete(&Todo{})
}

func UpdateTodo(todo *Todo, key string) {
	Db.Model(&todo).Where("id = ?", key).Updates(
		map[string]interface{}{
			"task": todo.Task,
		})
}

func init() {
	var err error
	Db, err = gorm.Open("mysql", "ucchy:password@tcp(mysql:3306)/todo_database")
	if err != nil {
		panic(err.Error)
	}

	Db.Set("gorm:table_options", "ENGINE = InnoDB").AutoMigrate(&Todo{})
	if err != nil {
		panic(err.Error)
	}
}
