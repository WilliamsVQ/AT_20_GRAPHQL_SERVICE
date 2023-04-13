FROM node:18-alpine3.16

WORKDIR /app/user

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]