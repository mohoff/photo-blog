FROM node:10

RUN yarn global add gatsby-cli

WORKDIR /srv
COPY public/ /srv

CMD ["gatsby", "serve"]