FROM ubuntu:22.04
# FROM ubuntu:latest


RUN apt update && apt install -y nodejs npm

RUN mkdir /app

COPY package.json /app/

WORKDIR /app

#RUN npm install
RUN npm config set legacy-peer-deps true \
    && npm install

COPY ./ /app/


ENTRYPOINT ["npm", "start"]

#docker run -p 3000:3000 -v $(pwd)/src:/app/src piwo 