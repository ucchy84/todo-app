package controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"todo-api/models"

	"github.com/gorilla/mux"
)

type TodoController struct{}

func (c TodoController) RootPage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to the Go Api Server")
	fmt.Println("Root endpoint is hooked!")
}

func (c TodoController) Index(w http.ResponseWriter, r *http.Request) {
	var todos []models.Todo
	models.FindAllTodos(&todos)
	responseBody, err := json.Marshal(todos)
	if err != nil {
		panic(err.Error)
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(responseBody)
}

func (c TodoController) Show(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	var todo models.Todo
	models.FindTodo(&todo, id)
	responseBody, err := json.Marshal(todo)
	if err != nil {
		panic(err.Error)
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(responseBody)
}

func (c TodoController) Create(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	var todo models.Todo
	if err := json.Unmarshal(reqBody, &todo); err != nil {
		panic(err.Error)
	}

	models.InsertTodo(&todo)
	// responseBody, err := json.Marshal(todo)
	// if err != nil {
	// 	panic(err.Error)
	// }

	// w.Header().Set("Contetn-Type", "application/json")
	// w.Write(responseBody)

	fmt.Fprintf(w, "New post was created")
}

func (c TodoController) Delete(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	models.DeleteTodo(id)
	fmt.Fprintf(w, "Post with ID = %s was deleted", id)
}

func (c TodoController) Update(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	reqBody, _ := ioutil.ReadAll(r.Body)

	var todo models.Todo
	if err := json.Unmarshal(reqBody, &todo); err != nil {
		panic(err.Error)
	}
	models.UpdateTodo(&todo, id)

	fmt.Fprintf(w, "Post with ID = %s was updated", id)
}
