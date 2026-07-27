FROM node:20-alpine

WORKDIR /app

# Install Mintlify CLI
RUN npm i -g mintlify

EXPOSE 3000

CMD ["mintlify", "dev"]
