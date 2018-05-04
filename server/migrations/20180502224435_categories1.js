exports.up = function(knex, Promise) {
  return knex.schema.table('categories', function(table){
    table.boolean('active');
    table.text('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('categories', function(table) {
    table.dropColumn('active');
    table.dropColumn('description');
  });
};
