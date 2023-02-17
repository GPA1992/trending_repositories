FROM node:14

COPY package*.json ./

WORKDIR  /app-backend

RUN npm install

COPY . .

ENV DB_HOST=db
ENV DB_PORT=3306
ENV DB_USER=root
ENV DB_PASSWORD=example
ENV DB_NAME=mydatabase

EXPOSE 5000


ENTRYPOINT ["npm", "run"]
CMD [ "dev"]
