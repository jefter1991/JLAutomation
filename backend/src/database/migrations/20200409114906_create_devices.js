exports.up = function(knex) {
    return knex.schema.createTable('devices',function(table){
      table.increments('dev_id');
      table.string('dev_name').notNullable();
      table.string('dev_ip').notNullable();
      table.string('dev_status',1).notNullable();
      table.string('dev_url').notNullable();
      table.integer('dev_part');
      table.integer('dev_port');
      
      table.foreign('dev_part').references('part_id').inTable('parts');
    });
};

exports.down = function(knex) {
  return  knex.schema.dropTable('devices');
};
