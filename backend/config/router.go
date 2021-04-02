package config

import (
	"net/http"
	"todo-api/controllers"

	"github.com/gorilla/mux"
)

func forCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set("Access-Control-Allow-Headers", "*")
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
		return
	})
}

func StartWebServer() error {
	c := controllers.TodoController{}
	diary := controllers.DiaryController{}
	router := mux.NewRouter().StrictSlash(true)

	router.Use(forCORS)
	router.HandleFunc("/", c.RootPage)

	router.HandleFunc("/todos", c.Index)
	router.HandleFunc("/todo/{id}", c.Show).Methods("GET")
	router.HandleFunc("/todo", c.Create)
	router.HandleFunc("/todo/{id}", c.Delete).Methods("DELETE")
	router.HandleFunc("/todo/{id}", c.Update).Methods("PUT")

	router.HandleFunc("/diaries", diary.Index)
	router.HandleFunc("/diary/{id}", diary.Show).Methods("GET")
	router.HandleFunc("/diary/{id}", diary.Create)

	return http.ListenAndServe(":8080", router)
}
