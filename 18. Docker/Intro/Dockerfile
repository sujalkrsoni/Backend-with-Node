    FROM node

    ENV MONGO_DB_USERNAME=sujal \
        MONGO_DB_PWD=mrcoder123

    WORKDIR /Intro

    COPY package*.json ./

    RUN npm install

    COPY . .

    CMD ["node", "server.js"]