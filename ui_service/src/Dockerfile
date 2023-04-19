# syntax=docker/dockerfile:1.4

FROM node:lts-buster

WORKDIR /app/ui

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
