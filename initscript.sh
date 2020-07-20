#!/bin/bash
#Concede permissão total a todos usuários e grupos na pasta webapp
chmod -R 777 webapp
#Iniciando os containers via Docker-compose
cd webapp && docker-compose up -d