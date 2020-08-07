import Knex from 'knex'

// Estou exportando um função assícrona que recebe com params com Knex, recebendo uma instância de conexão com o banco
// no metodo up eu faço alterações
export async function up(knex: Knex){
    return knex.schema.createTable('connections', table =>{
        table.increments('id').primary();


        table.integer('user_id') // Aqui esta se relacionando a outra tabela criando uma Foreign Key
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP')) // pegando ohorário atual do banco de dados e salvando nesse campo created_at
        .notNullable();
    });
}
// no metodo down eu desfaço alterações caso tenha dado ruim
export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}