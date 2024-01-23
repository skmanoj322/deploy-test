#!/bin/bash

cd /home/ubuntu/deploy-test && git pull origin main && yarn build && pm2 stop next && pm2 start npm --name "next" -- run "start:next"