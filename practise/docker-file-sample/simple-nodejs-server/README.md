Ref: https://www.youtube.com/watch?v=CsWoMpK3EtE


```sh
cd simple-nodejs-server ## change the directory
docker build -t simple-node-server:v0.1 . ## build the image
docker run --name my-node-server -p 4000:4000 -d simple-node-server ## run the container
```


```sh

docker login
docker tag simple-node-server:v0.1 hypermine/simple-node-server:v0.1
docker push hypermine/simple-node-server:v0.1
```

