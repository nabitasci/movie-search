FROM node:14-alpine

RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client

COPY package.json  /srv/app/client

RUN npm install

COPY . /srv/app/client

CMD ["npm", "start"]