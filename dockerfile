FROM node:16.14.0-alpine3.14

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["ng", "serve"]