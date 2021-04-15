package service

import (
	"access-manager/model"
)

func FetchAllUsers(users *[]model.User) {
	db, err := SqlConnect()
	if err != nil {
		panic(err.Error())
	}

	db.Find(&users)
}

func FetchUser(user *model.User, key string) {
	db, err := SqlConnect()
	if err != nil {
		panic(err.Error())
	}

	db.First(&user, key)
}

func InsertUser(user *model.User) {
	db, err := SqlConnect()
	if err != nil {
		panic(err.Error())
	}

	db.NewRecord(user)
	db.Create(&user)
}

func DeleteUser(key string) {
	db, err := SqlConnect()
	if err != nil {
		panic(err.Error())
	}

	db.Where("id = ?", key).Delete(&model.User{})
}

func UpdateUser(user *model.User, key string) {
	db, err := SqlConnect()
	if err != nil {
		panic(err.Error())
	}

	db.Model(&user).Where("id = ?", key).Updates(
		map[string]interface{}{
			"name": user.Name,
			"mail": user.Mail,
		},
	)
}
