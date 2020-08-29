
exports.up = async function(knex) {
    await knex.schema.createTable("project", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
        table.boolean("completed").defaultTo(false)
    })


    await knex.schema.createTable("resource", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
    })

    await knex.schema.createTable("task", (table) => {
        table.increments("id")
        table.integer("project_id").notNull().references("id").inTable("project")
        table.text("description").notNull()
        table.text("notes")
        table.boolean("completed").defaultTo(false)
    })

    await knex.schema.createTable("project_resources", (table) => {
        table.integer("project_id").notNull().references("id").inTable("project")
        table.integer("resource_id").notNull().references("id").inTable("resource")
        table.date("from_date").notNull().defaultTo(knex.raw("current_timestamp"))
        table.date("to_date").defaultTo(null)
        table.primary(["project_id", "resource_id"])
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources")
  await knex.schema.dropTableIfExists("task")
  await knex.schema.dropTableIfExists("resource")
  await knex.schema.dropTableIfExists("project")
};
