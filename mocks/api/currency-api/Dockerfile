FROM node:16.13.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i
COPY . .

EXPOSE 4444
CMD [ "node", "index.js" ]