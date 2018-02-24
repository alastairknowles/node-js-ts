# Small demo showing capabilities of nodeJS are very similar to Spring Boot
        
Steps to run this project:

1. App requires a small MySQL database. To set it up, do the following:

CREATE SCHEMA node_js_ts;

CREATE TABLE user (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  first_name varchar(100) NOT NULL,
  last_name varchar(100) NOT NULL,
  email varchar(190) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE USER 'node_js_ts'@'%' IDENTIFIED BY 'wedding';
GRANT ALL ON node_js_ts.* TO 'node_js_ts'@'%' IDENTIFIED BY 'wedding';
FLUSH PRIVILEGES;

2. You will need to have npm and typescript installed to run the application. Follow this tutorial: https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/

3. Go to the project directory, and compile (transpile) the application to the dist folder using 'tsc' in the command line.
4. Then go into the dist directory and start the app using 'node app.js'. It will be running on port 3000.
5. Fire up postman to play around with the endpoints.
