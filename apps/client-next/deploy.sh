export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.1/bin

cd /home/ubuntu/deploy-test && git pull origin main && yarn build && pm2 stop next && pm2 start npm --name "next" -- run "start:next"