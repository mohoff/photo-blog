# --- BUILDER STAGE ---
FROM node:10 AS builder

RUN yarn global add gatsby-cli

WORKDIR /app

COPY package.json .
RUN yarn install
COPY . .
RUN gatsby build

# --- APP STAGE ---
FROM builder

RUN yarn global add gatsby-cli

WORKDIR /srv

COPY --from=builder /app/public .

EXPOSE 8000
CMD ["gatsby", "serve"]