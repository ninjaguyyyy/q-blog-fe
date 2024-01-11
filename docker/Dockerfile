# ----- Install dependencies stage -----
FROM node:18-alpine AS deps
WORKDIR /app
RUN apk add yarn
COPY package.json yarn.lock ./
RUN yarn install

# ----- Buid stage -----
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# ----- Runner stage -----
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]





