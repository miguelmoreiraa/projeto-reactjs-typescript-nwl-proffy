import Knex from 'knex'

// Estou exportando um função assícrona que recebe com params com Knex, recebendo uma instância de conexão com o banco
// no metodo up eu faço alterações
export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table =>{
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();


        table.integer('class_id') // Aqui esta se relacionando a outra tabela criando uma Foreign Key
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
}
// no metodo down eu desfaço alterações caso tenha dado ruim
export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}