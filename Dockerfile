# Étape 1 : Build de l'application Next.js
FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* ./

RUN corepack enable && corepack prepare pnpm@10.6.1 --activate
RUN pnpm install

COPY . .

ENV NEXT_PUBLIC_IGNORE_ESLINT_ERRORS=true
RUN pnpm build

# Étape 2 : Image de production
FROM node:18-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

# 👇 Très important : activer PNPM dans l'image finale
RUN corepack enable && corepack prepare pnpm@10.6.1 --activate

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 8080

CMD ["pnpm", "start", "--", "-p", "8080"]
