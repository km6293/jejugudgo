# scripts/after_deploy.sh

#!/bin/bash

cd /srv/cloud

docker pull kimwooseong/cloud-frontend:latest
docker pull kimwooseong/cloud-backend:latest

# 기존 컨테이너 중지 및 제거
docker-compose down

# 새로운 이미지로 컨테이너 시작
docker-compose up -d
