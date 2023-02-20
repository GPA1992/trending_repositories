FROM node:16.15-alpine

WORKDIR /app-frontend

COPY package.json .
COPY . .
RUN npm install

EXPOSE 5173

ENTRYPOINT ["npm", "run"]
CMD [ "dev"]