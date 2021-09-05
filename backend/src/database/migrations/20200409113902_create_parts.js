
exports.up = function(knex) {
  return knex.schema.createTable('parts',function(table){
    table.increments('part_id');
    table.string('part_name').notNullable();
    table.string('part_status',1).notNullable();
    table.string('part_url').notNullable();
  });
};

exports.down = function(knex) {
  return  knex.schema.dropTable('parts');
};
