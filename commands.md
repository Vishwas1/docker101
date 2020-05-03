https://devhints.io/docker

```sh
sudo snap install docker
sudo chmod 666 /var/run/docker.sock 
sudo snap start docker

docker images 
docker rmi images <docker_image_id> # remove an images
docker pull jboss/keycloak
docker ps -a

docker run 91f818105776
docker run --name keycloak -it <image_id | image_name> ## run in interactive mode
docker run --name hskeycloak -p 8080:8080 -d jboss/keycloak



docker start <container_id | container_name>
docker stop <container_id | container_name>
docker restart <container_id | container_name>
docker top <container_id | container_name>
docker stats <container_id | container_name> ## CPU and mem usage
docker kill <container_id | container_name>
docker rm <container_id | container_name>
docker attach <container_id | container_name> 

docker logs --follow <container_id | container_name>
docker exec -it <container_id | container_name> bash ## run a command in a running container
docker exec docker-compose_keycloak_1 /opt/jboss/keycloak/bin/add-user-keycloak.sh -u admin -p admin


docker build -t <imagename:tagname> <location of dockerfile> ## ex: docker build --tag demoimg:1.0 Dockerfile




docker port <container_id | container_name>


##
# Volumes
##
docker volume create <volume_name>
docker volume ls
docker volume inspect <volume_name>
docker volume rm <volume_name>
docker volume prune 
docker run --name hskc1 -d -v dockervol1:/opt/jboss/keycloak -p 8080:8080 91f818105776

```

## Docker file

https://devhints.io/dockerfile


## Docker compose

- Compose is a tool for defining and running multi-container Docker applications.
- With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

https://devhints.io/docker-compose

Install

```sh
docker-compose -v

sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

```sh
cd practise/docker-compose
docker-compose config ## check the validity of docker-compose file
docker-compose up -d
docker-compose up -d --scale database=4
docker-compose restart <service_name> ## restart a specific service



docker-compose -f <.yml file name> config
docker-compose -f <.yml file name> down
docker-compose -f <.yml file name> up
```
