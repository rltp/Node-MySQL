FROM node:latest
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 80
RUN npm start
