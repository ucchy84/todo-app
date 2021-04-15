#!/bin/bash

mysql -u ucchy -ppassword < "/docker-entrypoint-initdb.d/init.sql"