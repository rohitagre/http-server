FROM node:20-alpine
VOLUME /public
WORKDIR /srv/http-server
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
EXPOSE 8080
ENTRYPOINT ["node", "./bin/http-server"]
