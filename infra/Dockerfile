FROM node:26-alpine
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install
COPY ./nest-cli.json ./prisma7.config.ts tsconfig.json ./
COPY prisma ./prisma/
COPY src ./src/
RUN npx prisma generate
COPY ./infra/start.sh ./
RUN chmod +x ./start.sh
CMD ["./start.sh"]