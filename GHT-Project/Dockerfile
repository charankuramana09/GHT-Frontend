


# Stage 4: Run the Angular application in a Docker container
# FROM node:20.11.0 AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:stable

# RUN rm -rf /usr/share/nginx/html/*
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# COPY --from=build /app/dist/my-payment-app /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# Stage 1: Build the Angular application using Node.js
FROM node:20.11.0 AS build

# Set the working directory to /app inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install  --force

# Copy all the files from your host machine to the container's working directory
COPY . .

# Build the Angular application
RUN npm run build

FROM nginx:1.21.0-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist/ght-project/browser .

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT [ "nginx","-g", "daemon off;"]
