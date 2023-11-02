exports.up = knex => knex.schema.createTable("products", table =>{
  table.increments("id");
  table.text("title");
  table.text("description");
  table.text("price");
  table.text("category");
  table.varchar("image");

});

exports.down = knex => knex.schema.dropTable("products");
