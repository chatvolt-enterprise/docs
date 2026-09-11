FROM node:20-alpine

WORKDIR /app

# Install Mint CLI (Mintlify v5+)
RUN npm i -g mint

EXPOSE 3000

CMD ["mint", "dev"]
