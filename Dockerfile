# Build stage
FROM node:22-alpine AS builder

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22-alpine

WORKDIR /usr/src/app

# Install serve to serve static files
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Serve the built files on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]