FROM --platform=$BUILDPLATFORM node:22-alpine

WORKDIR /app

COPY package.json .
COPY . .

# Instalar las dependencias
RUN npm install

#Test
RUN npm run test

#REMOVE DEV DEPENDENCIES
RUN rm -rf test && rm -rf node_modules

#INSTALL PROD DEPENDENCIES
RUN npm install --prod

# Comando run de la imagen
CMD [ "node", "app.js" ]

