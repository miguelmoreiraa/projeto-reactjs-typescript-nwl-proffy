import Knex from 'knex'

// Estou exportando um função assícrona que recebe com params com Knex, recebendo uma instância de conexão com o banco
// no metodo up eu faço alterações
export async function up(knex: Knex){
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}
// no metodo down eu desfaço alterações caso tenha dado ruim
export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}