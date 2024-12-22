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

# Build the React app for production
RUN npm run build

# Use Nginx to serve the React build
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
