FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install express
RUN npm install mongoose

COPY . .

EXPOSE 3000

CMD node index.js