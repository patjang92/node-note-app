https://thejackalofjavascript.com/developing-node-js-applications-in-docker/

docker build -t patjang92/docker-node-app:0.1.0 .
docker run -it -p 3000:3000 -v ${PWD}:/usr/src/app patjang92/docker-node-app:0.1.0
docker exec -it infallible_tesla /bin/bash