# syntax=docker/dockerfile:1

# ---- Stage 1: build the static export ----
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Produces ./out (Next.js static export). Needs network for deps + next/font.
RUN npm run build

# ---- Stage 2: serve with Caddy (automatic HTTPS) ----
FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/out /srv
# Caddy listens on 80/443 by default; certs are provisioned automatically.
EXPOSE 80 443
