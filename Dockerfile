# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose port 5000 (the port on which the Node.js application listens)
EXPOSE 5000

# Set the command to run the Node.js application
CMD [ "node", "index.js" ]

VOLUME /app/