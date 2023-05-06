exports.up = async (knex) => {
    await knex.schema.createTable('investments', (table) => {
        table.increments();
        table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.string('ticker_symbol', 10).notNullable();
        table.integer('quantity').notNullable();
        table.decimal('purchase_price', 10, 2).notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTable('investments');
};


