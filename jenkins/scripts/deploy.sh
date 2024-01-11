#!/usr/bin/env sh
echo "Jenkins Deploy"

# AWS_ID="579756503228"
# AWS_REGION="ap-northeast-1"

echo "Deploy by Docker"
# #Pull docker images from docker registry and run
echo $SERVER_USER@$SERVER_URL

chmod 400 $SERVER_SSH_KEY_FILE

ssh -o StrictHostKeyChecking=no -i $SERVER_SSH_KEY_FILE $SERVER_USER@$SERVER_URL "
  cd q-blog
  docker-compose pull
  docker-compose up -d
"

OUT=$?

if [ $OUT -eq 0 ]
then
  echo 'Deploy: Successful'
  exit 0
else
  echo 'Deploy: Failed'
  exit 1
fi
