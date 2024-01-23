#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.6.0/bin

cd /home/ubuntu/deploy-test
git pull origin main
yarn build
pm2 stop express
pm2 start npm --name "express" -- run "start:express"