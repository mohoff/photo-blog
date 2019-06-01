FROM node:10

RUN yarn global add gatsby-cli

RUN yarn install

EXPOSE 8000

CMD ["gatsby", "develop"]