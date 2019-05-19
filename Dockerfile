FROM node:10

WORKDIR /srv
COPY public/ /srv

CMD ["yarn", "start"]