export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.1/bin

cd /home/ubuntu/week-12-monorepo-full
git pull origin main
yarn build
pm2 stop react
pm2 start npm --name "react" -- run "start:react"