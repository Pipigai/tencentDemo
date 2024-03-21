
# install 命令的执行容器
FROM node:16.13.1-slim AS deps

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN yarn config set registry https://registry.npmmirror.com
RUN npm config set registry https://registry.npmmirror.com

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

# build 命令的执行容器
FROM node:16.13.1-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build
RUN ls -altr

# 运行项目的执行容器
FROM node:16.13.1-slim AS runner
WORKDIR /app

# COPY --from=builder /app/public ./public
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/vue.config.js ./vue.config.js
COPY --from=builder /app/babel.config.js ./babel.config.js
COPY --from=builder /app/.env.production ./.env.production
COPY --from=builder /app/.env.development ./.env.development

USER root

EXPOSE 80

ENV PORT 80

#CMD ["yarn", "dev"]
CMD [ "node", "server.js" ]