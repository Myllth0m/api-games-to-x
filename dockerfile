# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR ./dist

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Run npm build command (adjust as necessary)
RUN npm run build

# Expose port 3000 (adjust as necessary)
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
