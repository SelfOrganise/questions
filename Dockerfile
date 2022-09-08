FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY /api .
RUN npm install
RUN npm run build

ENV PORT 3000
CMD [ "node", "/app/dist/index.js" ]
