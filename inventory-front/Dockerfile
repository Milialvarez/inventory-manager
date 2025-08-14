# Etapa 1: Build con Node
FROM node:18-alpine AS build

WORKDIR /app

# Configurar npm para resolver problemas de red
RUN npm config set registry https://registry.npmjs.org/ && \
    npm config set fetch-timeout 600000 && \
    npm config set fetch-retry-mintimeout 10000 && \
    npm config set fetch-retry-maxtimeout 60000

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias con reintentos
RUN npm ci --only=production=false --silent || npm install --silent

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Verificar que el build se completó correctamente
RUN ls -la /app/dist/inventory-front/

# Etapa 2: Servir con nginx
FROM nginx:stable-alpine

# Copiar los archivos construidos (incluyendo la carpeta browser)
COPY --from=build /app/dist/inventory-front/ /usr/share/nginx/html/

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto
EXPOSE 80

# Comando para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]