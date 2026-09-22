# Stage 1: Build React application
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ARG VITE_WEATHER_API_KEY
ENV VITE_WEATHER_API_KEY=$VITE_WEATHER_API_KEY

RUN npm run build


# Stage 2: Serve application with Nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]