FROM node:21.5.0-alpine3.19

WORKDIR /usr/src/app/

COPY package*.json .

RUN npm install

COPY . .

ARG MONGOURL
ARG SECRET_KEY

ENV MONGOURL ${MONGOURL}
ENV SECRET_KEY ${SECRET_KEY}
EXPOSE 3200

CMD [ "npm","run","dev" ]