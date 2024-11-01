# Use the Node.js official image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies, including dev dependencies
RUN npm install

# Copy the application files
COPY . .

# Expose port 3000 for the API
EXPOSE 3000

# Run in development mode with nodemon
CMD ["npm", "run", "dev"]
