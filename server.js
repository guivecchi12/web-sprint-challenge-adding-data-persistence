const express = require('express');

const ProjectRouter = require('./project/project-routers');

const server = express();

server.use(express.json());
server.use('/api', ProjectRouter);

module.exports = server;