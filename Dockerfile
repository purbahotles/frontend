# frontend/Dockerfile
FROM node:20.11.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .
# Optional
# COPY package-lock.json .

# Install dependencies
# RUN npm install

# Recommended to resolve dependency conflicts
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Start the Nuxt application
CMD ["npm", "run", "dev"]
