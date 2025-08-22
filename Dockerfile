FROM node:22-alpine AS build

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./
COPY pnpm-workspace.yaml ./

# Copy all packages
COPY packages ./packages

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build all packages
RUN pnpm build

# Production stage
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy all built applications
COPY --from=build /app/packages/root/dist /usr/share/nginx/html
COPY --from=build /app/packages/mife/dist /usr/share/nginx/html/mife
COPY --from=build /app/packages/util/dist /usr/share/nginx/html/util

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]