exports.up = function(knex, Promise) {
  return knex.schema.createTable('boards', function(table){
    table.increments('board_id');
    table.integer('user_id').references("id").inTable("users").notNullable();
    table.integer('category_id').references("category_id").inTable("categories").notNullable();
    table.string('board_name').notNullable();
    table.text('image').notNullable();
    table.boolean('active');
    table.text('description');
    table.string('secretKey');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('boards');
};
