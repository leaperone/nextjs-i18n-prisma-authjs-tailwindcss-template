FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ARG NEXT_PUBLIC_TURNSTILE_SITE_KEY

RUN npm install -g pnpm --registry https://registry.npmmirror.com
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
    apk update --no-cache && apk add --no-cache tzdata
COPY . /app
WORKDIR /app

FROM base AS builder
ENV NODE_OPTIONS="--max-old-space-size=8192"
RUN --mount=type=cache,id=pnpm-template-web,target=/pnpm/store pnpm install --frozen-lockfile --registry https://registry.npmmirror.com
RUN sh prisma/generate.sh
RUN pnpm run build

FROM node:20-alpine AS final
ENV TZ=Asia/Shanghai
WORKDIR /app

COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=builder /usr/share/zoneinfo/Asia/Shanghai /usr/share/zoneinfo/Asia/Shanghai

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD [ "node", "server.js" ]
