const express = require('express');
const project = require('./project-model.js');
const router = express.Router();


//Resource API

router.post('/resource', (req, res) => {
    const newRes = req.body;

    project.addRes(newRes)
    .then(resource => {
        project.getRes(resource)
            .then( r => res.status(201).json(r) )
            .catch(() => res.status(500).json({ message: 'Failed to retrieve new resource' }))
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to create resource' });
    });
});

router.get("/resource/:id", (req, res) => {
    project.getRes(req.params.id)
        .then(resource => {
            if(resource){
                res.json(resource)
            }
            else{
                res.status(404).json({ message: "Could not find resource" })
            }
        })
        .catch(() => res.status(500).json({ message: "Failed to get resource" }))
})

//Project API

router.post('/project', (req, res) => {
    const newProj = req.body;

    project.addProj(newProj)
    .then(proj => {
        project.getProj(proj)
            .then( p => res.status(201).json(p) )
            .catch(() => res.status(500).json({ message: 'Failed to retrieve new project' }))     
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to create project' });
    });
});

router.get("/project/:id", (req, res) => {
    project.getProj(req.params.id)
        .then(project => {
            if(project){
                res.json(project)
            }
            else{
                res.status(404).json({ message: "Could not find project" })
            }
        })
        .catch(() => res.status(500).json({ message: "Failed to get project" }))
})

//Task API

router.post('/task', (req, res) => {
    const newTask = req.body;

    project.addTask(newTask)
    .then(task => {
        project.getTask(task)
            .then( t => res.status(201).json(t) )
            .catch(() => res.status(500).json({ message: 'Failed to retrieve new task' }))     
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to create task' });
    });
});

router.get("/task/:id", (req, res) => {
    project.getTask(req.params.id)
        .then(task => {
            if(task){
                res.json(task)
            }
            else{
                res.status(404).json({ message: "Could not find task" })
            }
        })
        .catch(() => res.status(500).json({ message: "Failed to get task" }))
})


module.exports = router;