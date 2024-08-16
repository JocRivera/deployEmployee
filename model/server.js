const express = require('express');
const { connect } = require('../database/database');
require('dotenv').config();
const { getEmployees, getEmployee, postEmployee, postDaysWorked, putEmployee, deleteEmployee } = require('../controller/employeeController');

class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.pathEmployee = "/api/Employee"; //la ruta publica de la api
        this.connectDatabase();
        this.middlewares();
        this.routes();
        this.listen()
    }
    async connectDatabase() {
        await connect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
    middlewares() {
        this.app.use(express.json());
    }
    routes() {
        this.app.get(this.pathEmployee, getEmployees);
        this.app.get(this.pathEmployee + '/:id', getEmployee);
        this.app.post(this.pathEmployee, postEmployee);
        this.app.put(this.pathEmployee + '/:id', putEmployee);
        this.app.delete(this.pathEmployee + '/:id', deleteEmployee);
    }

}
module.exports = Server;