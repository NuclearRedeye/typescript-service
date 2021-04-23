FROM node:fermium-alpine as build

WORKDIR /typescript-service
COPY ./package.json ./out/release/* ./
RUN npm install --production

FROM node:fermium-alpine
COPY --from=build /typescript-service /typescript-service
EXPOSE 8080

CMD ["node", "/typescript-service/index.js"]