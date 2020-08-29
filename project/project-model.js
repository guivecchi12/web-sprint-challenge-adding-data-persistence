const db = require("../data/configs")

function addRes(resource){
    return db("resource")
        .insert(resource)
}

function getRes(id){
    return db("resource")
        .where("id", id)
        .select("id","name", "description")
}

function addProj(project){
    return db("project")
        .insert(project)
}

function getProj(id){
    return db("project")
        .where("id", id)
        .select("id","name", "description", "completed")
}

function addTask(task){
    return db("task")
        .insert(task)
}

function getTask(id){
    return db("task as t")
        .join("project as p", "p.id", "t.project_id")
        .where("t.id", id)
        .select("p.name as Project_Name", "p.description as Project_Description", "t.description as Task_Description", "t.notes as Task_Notes")       
}

// Stretch

function getProjRes(id){
    return db("project as p")
        .join("project_resources as pr", "p.id", "pr.project_id")
        .join("resource as r", "r.id", "pr.resource_id")
        .where("p.id", id)
        .select("p.name as Project_name", "r.name as Resource")
}


module.exports = {
    addRes, getRes, addProj, getProj, addTask, getTask, getProjRes
}