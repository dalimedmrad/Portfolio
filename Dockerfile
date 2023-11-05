FROM node:16-alpine as build 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build 


FROM nginx:1.21-alpine as runtime 
COPY nginx/ /etc/nginx/conf.d
COPY --from=build /app/build /usr/share/nginx/html