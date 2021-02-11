exports.up = function (knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.timestamp('deletedAtt')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.dropColumn('deletedAtt')
    })
};