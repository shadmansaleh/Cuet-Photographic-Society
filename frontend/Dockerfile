FROM node:22-alpine

RUN mkdir -p /opt/app

WORKDIR /opt/app

# Install Dependencies
COPY package*.json ./

RUN npm install

EXPOSE 8080

# Copy app source code
COPY . .

RUN npm run build


CMD ["npm", "run", "preview"]
