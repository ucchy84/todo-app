package config

import (
	"net/http"
	"todo-api/controllers"

	"github.com/gorilla/mux"
)

func StartWebServer() error {
	c := controllers.TodoController{}
	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/", c.RootPage)
	router.HandleFunc("/todos", c.Index).Methods("GET")
	router.HandleFunc("/todo/{id}", c.Show).Methods("GET")

	router.HandleFunc("/todo", c.Create).Methods("POST")
	router.HandleFunc("/todo/{id}", c.Delete).Methods("DELETE")
	router.HandleFunc("/todo/{id}", c.Update).Methods("PUT")

	return http.ListenAndServe(":8080", router)
}
