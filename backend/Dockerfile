#  Dockerfile for Node Express Backend

FROM node:22-alpine

# Create App Directory
RUN mkdir -p /opt/app
WORKDIR /opt/app

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

RUN npm run build

# Exports
EXPOSE 5000

CMD ["npm","start"]
