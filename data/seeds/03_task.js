exports.seed = async function(knex) {
	await knex("task").insert([   
		{ project_id: 1, description: "write header" },
        { project_id: 1, description: "write body", notes: "make it blue", completed: false },
        { project_id: 2, description: "make it dance", notes: "dance faster", completed: true },
	])
}