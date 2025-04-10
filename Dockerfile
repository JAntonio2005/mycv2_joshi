# Paso 1: Usamos una imagen base de Node.js para construir el proyecto Angular
FROM node:16 AS build

# Definimos el directorio de trabajo en la imagen
WORKDIR /app

# Copiamos los archivos del proyecto al contenedor
COPY . .

# Instalamos las dependencias del proyecto
RUN npm install

# Construimos el proyecto Angular en modo de producción
RUN npm run build --prod

# Paso 2: Usamos una imagen base de Nginx para servir el contenido estático
FROM nginx:alpine

# Copiamos el contenido construido del proyecto Angular al contenedor de Nginx
COPY --from=build /app/dist/mycv2 /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
