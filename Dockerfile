# latest of tomcat v9 with JRE 11 is the basis
FROM tomcat:9-jre11

# set maintainer
MAINTAINER Murat Artim "muratartim@gmail.com"

# copy war
COPY target/EquinoxWeb-*.war /usr/local/tomcat/webapps/EquinoxWeb.war

# To build the docker image: (from where this file is located)
# docker image build -t muratartim/equinox_web_server:latest .

# To create & run the container:
# docker container run -p 8080:8080 -d --name equinox_web_server --network equinox_network muratartim/equinox_web_server

# To start an existing container
# docker container start equinox_web_server