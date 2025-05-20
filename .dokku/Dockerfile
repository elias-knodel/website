# ---- Build Stage ----
FROM oven/bun AS builder

WORKDIR /app

# Copy everything
COPY . .

# Install deps and build
RUN bun install
RUN bun --bun run build

# ---- Run Stage ----
FROM oven/bun

WORKDIR /app

# Copy built files and dependencies only
COPY --from=builder /app /app

# If using `bun run preview` (Node adapter)
CMD ["bun", "run", "start"]
