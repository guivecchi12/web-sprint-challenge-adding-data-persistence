exports.seed = async function(knex) {
	await knex("project").insert([   
		{ name: "html" },
		{ name: "js", description: "make stuff", completed: true },
	])
}