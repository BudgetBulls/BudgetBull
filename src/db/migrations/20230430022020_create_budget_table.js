/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => (
    knex.schema
    .createTable('budget', (table) => {
        table.increments();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.date('date').notNullable();
        table.string('description').notNullable();
        table.decimal('amount', 10, 2).notNullable();
        table.enum('type', ['income', 'expense']).notNullable();
        table.timestamps(true, true);
      })
);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('budget');


