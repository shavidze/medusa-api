# Installing dependencies:

FROM node:18-alpine AS install-dependencies

WORKDIR /usr/src/app

RUN npm install -g npm@9.5.0

RUN npm install -g @medusajs/medusa-cli@latest

COPY package.json package-lock.json ./

RUN npm install

COPY . .


# Creating a build:

FROM node:18-alpine AS create-build

WORKDIR /usr/src/app

RUN npm install -g npm@9.5.0

COPY --from=install-dependencies /usr/src/app ./

RUN npm run build

USER node


# Running the application:

FROM node:18-alpine AS run

WORKDIR /usr/src/app

RUN npm install -g npm@9.5.0

RUN npm install --loglevel=error

COPY --from=install-dependencies /usr/src/app/node_modules ./node_modules
COPY --from=create-build /usr/src/app/dist ./dist
COPY package.json ./

RUN npm prune --production

ENTRYPOINT ["./develop.sh", "prod"]

