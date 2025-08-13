# Etapa 1: Build con Node
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN ls -l /app/dist/inventory-front


# Etapa 2: Servir con nginx
FROM nginx:stable-alpine

COPY --from=build /app/dist/inventory-front/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
