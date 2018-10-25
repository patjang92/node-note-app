https://thejackalofjavascript.com/developing-node-js-applications-in-docker/

## Setup

* Setup docker image and run

```
docker build -t patjang92/node-note-app:0.1.0 .
docker run -t -d -name node-note-app -p 3000:3000 -v ${PWD}:/usr/src/app patjang92/node-note-app:0.1.0 --name node-note-app
```

* Find docker container and open bash terminal
```
docker ps
docker exec -it node-note-app /bin/bash
```
