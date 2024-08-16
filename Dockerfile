# uses slim node image
FROM node:14 as build

# set up app directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json /app/

# install dependencies
RUN npm install

# copy the app to the image
COPY . /app

# build the app
RUN npm run build

# build the nginx image
FROM nginx:1.17.8-alpine

# copy the build output to replace the default nginx contents
COPY --from=0 /app/build /usr/share/nginx/html

# copy the custom nginx configuration
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# expose port 80
EXPOSE 80

# start the server
CMD ["nginx", "-g", "daemon off;"]




