FROM node

ARG APP_DIR=web-app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package*.json .

RUN apt update && apt upgrade -y

RUN apt install nodejs -y
RUN apt install npm -y

RUN npm install

COPY . .