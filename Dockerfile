FROM node:lts-alpine
WORKDIR /usr/app/src
COPY package*.json ./
RUN npm ci
COPY . .
ENTRYPOINT node bin/www
