FROM node:lts-slim

RUN apt-get update && \
    apt-get install -y git locales sudo vim-tiny && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN sed -i -E 's/# (ja_JP.UTF-8)/\1/' /etc/locale.gen && locale-gen
RUN echo 'node ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

ENV LANG ja_JP.UTF-8
ENV TZ Asia/Tokyo
ENV GENERATE_SOURCEMAP=false

USER node