exports.seed = async function(knex) {
    await knex("project_resources").truncate()
    await knex("task").truncate()
    await knex("resource").truncate()
    await knex("project").truncate()
}