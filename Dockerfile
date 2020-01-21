FROM node:10 as builder
ARG TEST
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./src/ ./src/ 
COPY ./assets/ ./assets/ 
RUN npm run build

FROM nginx
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80