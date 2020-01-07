# EquinoxWeb
[![Apache License](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![HitCount](http://hits.dwyl.io/muratartim/EquinoxWeb.svg)](http://hits.dwyl.io/muratartim/EquinoxWeb)
[![DockerHub](https://img.shields.io/badge/dockerhub-muratartim%2Fequinox__web__server-yellow.svg)](https://hub.docker.com/r/muratartim/equinox_web_server)

Dynamic web project for the web content of fatigue-digital-twin platform. The web project is deployed to digital-twin platform web server as a WAR archive. It contains web page implementations for the following pages;
- Digital-twin platform demonstration videos page,
- Digital-twin desktop application download pages (of all target operating systems).

The web pages are implemented using HTML, javascript and css.

## Web server
Digital-twin web server is a standard Tomcat web server. In addition to above mentioned web pages, the digital-twin web server also hosts the digital-twin search engine web application, namely EquinoxWiki.

## Screenshots
Here are some screen shots from the above mentioned web pages implemented in the project.

![demo](https://user-images.githubusercontent.com/13915745/41068254-ef01c814-69e8-11e8-8471-2bca6a7524f5.jpg)

![mg2](https://user-images.githubusercontent.com/13915745/41068654-cab3faac-69ea-11e8-8010-237522e8e64c.jpg)

## How to build & run the project in a Docker container
Equinox web server is also available as a [container image in Docker Hub](https://hub.docker.com/r/muratartim/equinox_web_server "Equinox Web Server"). The container can be run as follows:

1. Pull the container image from Docker Hub:
```
docker pull muratartim/equinox_web_server
```
2. Create & run the container:
```
docker container run -p 8080:8080 -d --name equinox_web_server --network equinox_network muratartim/equinox_web_server
```
3. In the address area of your browser, type and submit:
  * [http://localhost:8080/EquinoxWeb/demo.html](http://localhost:8080/EquinoxWeb/demo.html "Equinox Demo Videos") for Equinox Platform Demonstration Videos,
  * [http://localhost:8080/EquinoxWeb/index.html](http://localhost:8080/EquinoxWeb/index.html "Equinox Client Download Page") for Equinox Client Download Page.

## How to run the server-side platform using Docker Compose
1. Download sample data for SFTP server: [sample data](https://drive.google.com/uc?export=download&id=1Ldr7vujbLYqOiaes0DtSNiEDNBN8yHa6)
2. Create directory 'backups' and copy the downloaded 'sftp_data.tar' file into the directory.
3. Create a named volume by executing the following command outside of 'backups' directory:
```docker
docker container run --rm -v equinox_sftp_data:/dbdata -v $(pwd)/backups:/backup ubuntu bash -c "cd /dbdata && tar xvf /backup/sftp_data.tar --strip 1"
```
4. Download sample data for MySQL server: [sample data](https://drive.google.com/uc?export=download&id=1lvzTEUpvwJw7Om-xPynxSe2d3do5f6oz)
5. Create directory 'backups' and copy the downloaded 'mysql_data.tar' file into the directory.
6. Create a named volume by executing the following command outside of 'backups' directory:
```docker
docker container run --rm -v equinox_mysql_data:/dbdata -v $(pwd)/backups:/backup ubuntu bash -c "cd /dbdata && tar xvf /backup/mysql_data.tar --strip 1"
```
7. Create & start the whole platform from where the docker-compose.yml file is located:
```docker
docker-compose up
```
8. Stop & remove the platform from where the docker-compose.yml file is located:
```docker
docker-compose down
```

## How to deploy the server-side platform on AWS with single EC2 instance
1. Download the Deployment Template File [One-Instance-Arch-CloudFormation.yml](https://github.com/muratartim/Equinox/blob/master/docs/aws/cloud-formation/One-Instance-Arch-CloudFormation.yml).
2. Validate the template by running the following command (from where the Deployment Template File is located):
```
aws cloudformation validate-template --template-body file://./One-Instance-Arch-CloudFormation.yml
```
3. Create an AWS CloudFormation Stack using the following command (from where the Deployment Template File is located). Note that, this command will deploy the platform using the default parameters (which are valid for the 'eu-central-1' AWS Region).
```
aws cloudformation create-stack --stack-name equinox --template-body file://./One-Instance-Arch-CloudFormation.yml
```
4. Delete & rollback the stack as follows:
```
aws cloudformation delete-stack --stack-name equinox
```

This will deploy the platform on AWS utilizing the following architecture:

<img width="1018" alt="Equinox_One_Instance_AWS_Architecture" src="https://user-images.githubusercontent.com/13915745/70265112-0684f280-179a-11ea-8562-5996c8235707.png">

## Full stack server-side deployment on AWS
1. Download the Deployment Template File [Full-Stack-High-Availability-Arch-CloudFormation.yml](https://github.com/muratartim/Equinox/blob/master/docs/aws/cloud-formation/Full-Stack-High-Availability-Arch-CloudFormation.yml). 
2. Validate the template by running the following command (from where the Deployment Template File is located):
```
aws cloudformation validate-template --template-body file://./Full-Stack-High-Availability-Arch-CloudFormation.yml
```
3. Create an AWS CloudFormation Stack using the following command (from where the Deployment Template File is located). Note that, this command will deploy the platform using the default parameters (which are valid for the 'eu-central-1' AWS Region).
```
aws cloudformation create-stack --stack-name equinox-digital-twin --template-body file://./Full-Stack-High-Availability-Arch-CloudFormation.yml
```
4. Delete & rollback the stack as follows:
```
aws cloudformation delete-stack --stack-name equinox-digital-twin
```

This will deploy the platform on AWS utilizing the following architecture:

<img width="1018" alt="Equinox_Full_Stack_AWS_Architecture" src="https://user-images.githubusercontent.com/13915745/71382538-ad5df100-25d8-11ea-9cac-b568d073c469.png">