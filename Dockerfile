# ==========================================
# Stage 1: Build the Angular application
# ==========================================
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Angular app for production
# Note: Ensure this matches your build script in package.json
RUN npm run build -- --configuration=production

# ==========================================
# Stage 2: Serve the app with Nginx
# ==========================================
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the built artifacts from the build stage to Nginx's web folder
# IMPORTANT: Replace <your-app-name> with the actual name of your app!
# Note: If you are using Angular 17+, the path might be /app/dist/<your-app-name>/browser
COPY --from=build /app/dist/sport-web /usr/share/nginx/html

# Copy custom Nginx configuration (Required if using Angular Routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]