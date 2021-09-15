FROM node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ["day-office/package.json","/app/package.json"]

COPY ["day-office","/app"]

RUN npm install --silent
# Inicializa a aplicação
CMD ["npm", "start"]