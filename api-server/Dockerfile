# Create the base image and install dependencies. The app directory is mounted
# directly onto the source directly, with the exception of node_modules: node_modules
# most be different from the local version or else the native bindings will likely
# be broken.
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Dev stage for running locally. Watches source code and immediately applies updates
# via the dev server. Also watches package.json to automatically prune/install new packages.
FROM base AS development
EXPOSE 3001
CMD npm run watch-package & npm run dev

# Stage 3: Build stage for compiling
# FROM base AS build
# RUN npm install --only=dev
# RUN npm run build

# Stage 4: Production stage for deploy
# FROM node:21-alpine AS production
# WORKDIR /app
# COPY --from=build /app/dist ./dist
# COPY --from=build /app/package*.json ./
# RUN npm install --only=production
# EXPOSE 3000
# CMD ["node", "dist/index.js"]
