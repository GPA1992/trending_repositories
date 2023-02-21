#!/bin/bash
echo "------------------------------------"
echo "instalando na pasta raiz"
echo "------------------------------------"
npm install

# teste
cd app
cd backend
echo "------------------------------------"
echo "Instalando as dependencias do backend"
echo "------------------------------------"
npm install


cd ..
cd /frontend
echo "------------------------------------"
echo "instalando as dependencias do frontend"
echo "------------------------------------"
npm install
