FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD admin  
ENV MYSQL_DATABASE node-mysql
ENV MYSQL_USER client 
ENV MYSQL_PASSWORD admin

ADD setup.sql /docker-entrypoint-initdb.d
