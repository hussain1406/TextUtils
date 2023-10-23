FROM node:18-alpine as build

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM httpd:2-alpine 
COPY --from=build /app/build/ /usr/local/apache2/htdocs/
WORKDIR /usr/local/apache2/htdocs/
RUN mkdir TextUtils/ && \
    mv static TextUtils/
