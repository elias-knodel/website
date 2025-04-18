FROM oven/bun:1.2 AS builder

COPY . /app

WORKDIR /app

RUN bun install
RUN bun run build

FROM oven/bun:1.2 AS prod

COPY --from=builder /app/build /app

RUN chmod -R 750 /app

USER 1234
EXPOSE 3000/tcp

ENTRYPOINT ["bun"]
CMD [ "./index.js" ]
