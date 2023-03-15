FROM node:alpine

RUN mkdir -p /var/www/app

WORKDIR /var/www/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start:dev"]