package config

import (
	"access-manager/controller"
	"net/http"

	"github.com/gorilla/mux"
)

func StartWebServer() error {
	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/users", controller.Index).Methods("GET")
	router.HandleFunc("/user/{id}", controller.Show).Methods("GET")

	router.HandleFunc("/user", controller.Create).Methods("POST")
	router.HandleFunc("/user/{id}", controller.Update).Methods("PUT")

	return http.ListenAndServe(":8080", router)
}
