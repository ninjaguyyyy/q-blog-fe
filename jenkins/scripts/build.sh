#!/usr/bin/env sh
echo "Jenkins Build"
cat ./docker/build.sh
export PATH="/usr/local/bin:$PATH"


docker ps -a
cat $ENV_FILE > ./.env

cat $ENV_FILE
cd ./docker

sh ./build.sh

docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD

docker push nguyenhuuchi3006/q-blog-fe:latest