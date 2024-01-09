FROM node:21.5.0-slim

# Metadata 
LABEL org.opencontainers.image.authors="manthan2306s@gmail.com"


#-----------------------


#-----------------------
ENV NODE_ENV production
WORKDIR /usr/src/path
COPY package*.json .

#Cached Mount
RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm ci --only=production


#------------------------
USER node
COPY --chown=node:node . .


#------------------------
EXPOSE 3200

#------------------------
CMD ["node","index.js"]