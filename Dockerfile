
FROM node:22-alpine3.21

WORKDIR /app

COPY package*.json ./

RUN npm install

# CMD ["tail", "-f", "/dev/null"]
CMD ["node", "server.js"]