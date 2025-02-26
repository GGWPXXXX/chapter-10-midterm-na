FROM node:18

WORKDIR /usr/src/app

# Copy package files (if any)
COPY package*.json ./

# Install dependencies (if you have any)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port defined in your app
EXPOSE 80

CMD ["node", "src/app.js"]
