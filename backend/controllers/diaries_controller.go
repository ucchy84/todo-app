package controllers

import (
	"encoding/json"
	"net/http"
	"todo-api/models"

	"github.com/gorilla/mux"
)

type DiaryController struct{}

func (c DiaryController) Index(w http.ResponseWriter, r *http.Request) {
	var diaries []models.Diary
	models.FindAllDiaries(&diaries)

	responseBody, err := json.Marshal(diaries)
	if err != nil {
		panic(err.Error)
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(responseBody)
}

func (c DiaryController) Show(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	var diary models.Diary
	models.FindDiary(&diary, id)
	responseBody, err := json.Marshal(diary)
	if err != nil {
		panic(err.Error)
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(responseBody)
}

func (c DiaryController) Create(w http.ResponseWriter, r *http.Request) {
	var diary models.Diary
	models.InsertDiary(&diary)
	responseBody, err := json.Marshal(diary)
	if err != nil {
		panic(err.Error)
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(responseBody)
}
