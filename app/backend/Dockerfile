FROM node:14-alpine

EXPOSE 3001

WORKDIR /app-backend/src

COPY package*.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]