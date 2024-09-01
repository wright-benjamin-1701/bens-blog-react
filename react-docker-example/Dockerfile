FROM node:18-alpine
WORKDIR /react-docker-example/
EXPOSE 3000

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/

#For TS project, also need:
COPY tsconfig.json / /react-docker-example/ 

RUN npm install
RUN npm i axios

CMD ["npm", "start"]