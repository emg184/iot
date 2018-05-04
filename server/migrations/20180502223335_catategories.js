exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(table){
    table.increments('category_id');
    table.string('category_name').notNullable();
    table.text('image').notNullable();
    table.integer('parent_category');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
