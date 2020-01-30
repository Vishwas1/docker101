```sh
sudo snap install docker
sudo chmod 666 /var/run/docker.sock 

docker images 
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
docker exec hskeycloak /opt/jboss/keycloak/bin/add-user-keycloak.sh -u admin -p admin
```
