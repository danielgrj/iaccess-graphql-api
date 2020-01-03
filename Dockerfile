FROM node:10-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json  ./

RUN npm install \
  && npm cache clean

EXPOSE 4000

CMD ["npm", "run", "dev"];