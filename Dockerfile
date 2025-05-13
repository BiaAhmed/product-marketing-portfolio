# v-1.0.0

# base image
FROM node:20.18-alpine

# create working directory
WORKDIR /var/app

# copy only package files first for better caching
COPY package*.json ./

# install deps
RUN npm install

# copy rest of the code
COPY . .

# build the app
RUN npm run build

# serve when container starts
CMD ["npm", "run", "serve"]