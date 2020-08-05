FROM node:13.12.0-alpine

# Set working directory
WORKDIR /app

# Add `/challenge/node_modules/.bin` to $PATH
ENV PATH /challenge/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# Copy app
COPY . ./

# Expose port
EXPOSE 8080

# Start app
CMD ["npm", "start"]