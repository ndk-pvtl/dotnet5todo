docker run -it --rm --name=db \
         -e MYSQL_USER=muser \
         -e MYSQL_DATABASE=mdb \
         -e MYSQL_PASSWORD=mpass \
         -p 3306:3306 \
         jbergstroem/mariadb-alpine