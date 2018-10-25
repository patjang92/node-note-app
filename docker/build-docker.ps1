docker build -t patjang92/node-note-app:0.1.0 .
docker run -t -d --name node-note-app -p 3000:3000 -p 9229:9229 -v ${PWD}:/usr/src/app patjang92/node-note-app:0.1.0