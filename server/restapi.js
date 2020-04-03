const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
// sequelize objects
const { Sequelize } = require('sequelize');
// define express instance
const instance = express();
// configure middlewares with express
// for cors and bosyParser
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(cors());

const sequelize = new Sequelize("student", "root", "Passw0rd_", {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
        idle: 10000
    },
    define: {
        timestamps: false // omit the createdAt and updatedAt columns
    }
});

// import the model class file
const students = sequelize.import('./models/students');


instance.get('/api/students', (request, response) => {
    // do not overwrite the models
    sequelize.sync({ force: false })
        .then(() => students.findAll()) // --> the select * from Students
        .then((result) => {
            response.json({ statusCode: 200, rowCount: result.length, data: result });
            response.end();
        }).catch((error) => {
            response.send({ statusCode: 500, data: error });
        })
});

// listenting on the port
instance.listen(6070, () => {
    console.log('Server is listening on port 6070');
})