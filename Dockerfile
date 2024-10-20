FROM node:18-alpine
EXPOSE 3000

COPY public/ /public
COPY src/ /src
COPY package.json /

#For TS project, also need:
COPY tsconfig.json / 

RUN npm install

CMD ["npm", "start"]