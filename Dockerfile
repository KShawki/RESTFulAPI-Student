FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["node", "index.js"]

# How to run? 
# docker build -t cloud-assign-2 .  
# docker run -d -p 3000:3000 --name restful-app rest

