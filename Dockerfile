# --- BUILDER STAGE ---
FROM node:12 AS builder

RUN yarn global add gatsby-cli

WORKDIR /app

COPY package.json .
RUN yarn install
COPY . .
RUN gatsby build

# --- APP STAGE ---
FROM alpine:3.9

RUN apk update && apk upgrade \
  && apk add --no-cache curl bash

RUN curl --silent --show-error --fail --location https://getcaddy.com | bash -s personal

WORKDIR /srv

COPY --from=builder /app/public .
COPY Caddyfile /etc/Caddyfile

EXPOSE 8000
CMD ["caddy", "--conf", "/etc/Caddyfile", "--log", "stdout"]