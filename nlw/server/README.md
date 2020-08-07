## Anotações

Todas as routes requisições vai parti da const = app (e o express é uma função)

O request você irá obter informações sobre a requisão como por exemplo o cabeçalho e o corpo, que por exemplo quando vou fazer a criação de um novo usuário é dentro do request que vou ter o nome, senha.. do usuário

No response é a resposta que vou devolver da minha api(back-end) para dentro do front end

Fazer a aplicação ouvir requisições HTTP dentro do () passa a porta onde terá o servidor localhost:3333

Cada rota é um endereço da aplicação por exemplo http://localhost:3333/users onde aqui vou listar todos os usuários

Recurso é que vem depois do do endereço como /users...

Quando fazemos uma requisição pra nossa API existem tres tipos de paramêtros, quando nos fomos criar uma informação ou usuário, atualizar uma informação os dados dessa informação que a gente quer atualizar, geralmente eles vão vir corpo da requisição.

Métodos HTTP
 GET: Buscar ou listar uma informação
 POST: Criar alguma nova informação
 PUT: Atualizar uma informação existente
 DELETE: Deletar uma informação existente

 Corpo (Request Body); Dados para criação  ou atualização de um registro
 Route Params: Identificar qual recurso eu quero atualizar ou deletar
 Query Params: Paginação, Filter, Ordenação



## Funcionalidades

## Conexões

- Rota para listar o total conexões realizadas;
- Rota para criar uma nova conexão;

## Aulas  

- Rota para criar uma aula;
- Rota para listar aulas;
 - Filtrar por matéria, dia da semana e horário;


