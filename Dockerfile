FROM node:10-alpine

EXPOSE 3000

WORKDIR /home/node
COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
