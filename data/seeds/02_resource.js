exports.seed = async function(knex) {
	await knex("resource").insert([   
		{ name: "computer" },
		{ name: "room", description: "20a" },
	])
}