FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

ENV NODE_ENV=production
ENV PORT=80

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]
