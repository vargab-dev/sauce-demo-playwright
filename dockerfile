FROM node:20

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
RUN npm install --production=false

RUN npx playwright install --with-deps

COPY . .

CMD ["sh", "-c", "npm run bdd && node report.js"]