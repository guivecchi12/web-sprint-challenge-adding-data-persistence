exports.seed = async function(knex) {
	await knex("project_resources").insert([   
		{ project_id: 1, resource_id: 1, from_date: "2018-02-01", to_date: "2019-12-30" },
        { project_id: 1, resource_id: 2, from_date: "2018-02-01", to_date: "2019-12-30" },
        { project_id: 2, resource_id: 1 , from_date: "2018-02-01", to_date: "2019-12-30"},
	])
}