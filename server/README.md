1. Install all the node modules by running:
command: npm install

2. Run the sequelize command to create the model of Database to connect to the frontend of the application
command: sequelize-auto -h localhost -d student -u root -x Password --dialect mysql -o models -t students

3. run the file restapi.js to initiate the server
command: node restapi.js

Now we've initialized the server.
you can also see the data by going to browser and open 'http://localhost:6070/api/students'.
