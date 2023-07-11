# syntax=docker/dockerfile:1

FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "dev"]

EXPOSE 3000