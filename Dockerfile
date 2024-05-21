FROM node:22-alpine as build
WORKDIR /app
COPY ./package*.json ./

RUN npm ci

COPY ./ ./
RUN npm run build

FROM nginx:latest
EXPOSE 8080
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/chi/browser /usr/share/nginx/html

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]