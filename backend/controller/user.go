package controller

import (
	"access-manager/model"
	"access-manager/service"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

func Index(w http.ResponseWriter, r *http.Request) {
	var users []model.User

	service.FetchAllUsers(&users)
	resBody, err := json.Marshal(users)
	if err != nil {
		panic(err.Error())
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(resBody)
}

func Show(w http.ResponseWriter, r *http.Request) {
	var user model.User
	vars := mux.Vars(r)
	key := vars["id"]

	service.FetchUser(&user, key)
	resBody, err := json.Marshal(user)
	if err != nil {
		panic(err.Error())
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(resBody)
}

func Create(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)

	var user model.User
	if err := json.Unmarshal(reqBody, &user); err != nil {
		panic(err.Error())
	}

	service.InsertUser(&user)
	resBody, err := json.Marshal(user)
	if err != nil {
		panic(err.Error())
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(resBody)
}

func Update(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	reqBody, _ := ioutil.ReadAll(r.Body)

	var user model.User
	if err := json.Unmarshal(reqBody, &user); err != nil {
		panic(err.Error())
	}

	service.UpdateUser(&user, id)
	convertUintId, _ := strconv.ParseUint(id, 10, 64)
	user.Id = uint(convertUintId)
	resBody, err := json.Marshal(user)
	if err != nil {
		panic(err.Error())
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(resBody)
}
