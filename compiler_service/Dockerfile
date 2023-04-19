# Base image
FROM node:18-alpine

# Install necessary dependencies
RUN apk update && \
    apk add --no-cache \
        build-base \
        nodejs \
        npm \
        openjdk11 \
        python3 \
        py3-pip  

RUN apk add --no-cache mono --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing && \
    apk add --no-cache --virtual=.build-dependencies ca-certificates && \
    cert-sync /etc/ssl/certs/ca-certificates.crt && \
    apk del .build-dependencies

# Create a working directory
WORKDIR /app

# Copy source code
COPY . .

# Install Python dependencies
RUN pip3 install --no-cache --upgrade pip setuptools

# Start the API
CMD ["node", "index.js"]

