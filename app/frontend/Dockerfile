FROM node:14

COPY package*.json ./

WORKDIR /app-frontend

RUN npm install

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "run"]
CMD [ "dev"]
