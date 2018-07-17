exports.up = function(knex, Promise) {
  return knex.schema.createTable('tests', function(table){
    table.increments('test_id');
    table.integer('user_id').references("id").inTable("users").notNullable();
    table.integer('board_id').references("board_id").inTable("boards").notNullable();
    table.string('test_name').notNullable();
    table.text('image').notNullable();
    table.boolean('active');
    table.text('test_description');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tests');
};
