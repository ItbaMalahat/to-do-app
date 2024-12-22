# Use Node.js LTS as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5000 for the backend
EXPOSE 5000

# Command to run the backend server
CMD ["npm", "start"]

