# ---- Build Stage ----
FROM oven/bun AS builder

WORKDIR /app

# Receive the CDN origin at build time
# Usage: docker build --build-arg PUBLIC_CDN_URL=https://cdn.yourdomain.com
ARG PUBLIC_CDN_URL
ENV PUBLIC_CDN_URL=$PUBLIC_CDN_URL

# Copy everything
COPY . .

# Install deps and build
RUN bun install
RUN bun --bun run build

# ---- Run Stage ----
FROM oven/bun AS production

WORKDIR /app

# Copy built files and dependencies only
COPY --from=builder /app /app

USER bun

# If using `bun run preview` (Node adapter)
CMD ["bun", "run", "start"]
