FROM node:14-alpine

EXPOSE 3001

WORKDIR /opt/trybe-todo-list-backend

COPY package*.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]