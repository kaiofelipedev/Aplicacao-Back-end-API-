Projeto desenvolvido como atividade avaliativa no curso de Análise e Desenvolvimento de Sistemas da faculdade UniFecaf.

* Objetivo:
  - Desenvolver uma aplicação back-end (API) para disponibilizar dados de personagens de desenhos.
  - Implementar o padrão de arquitetura MVC (Model, View, Controller) para a estrutura do projeto.
  - Atender aos quatro métodos do padrão REST de api (Create, Read, Update e Delete).
 
* Ferramentas:
  - O projeto foi desenvolvido em JavaScript com Node.JS, além de alguns módulos do Node.JS, como:
  - Expres (para criação e configuração do servidor), Cors (configurações de acesso),
  - Body-Parser (para manipulação de Json) e Prisma (conexão com o banco de dados).
 
* Métodos:
  GET: o EndPoint do tipo GET retorna todos os registros contidos no banco de dados.
  ![get](https://github.com/user-attachments/assets/fdd5a03f-01d7-4d75-aeb2-c00f9ab424ce)

  POST: O EndPoint do tipo POST cria um novo registro a partir dos dados enviados no corpo da requisição e salva no banco de dados.
  ![post](https://github.com/user-attachments/assets/55c5a4ed-6a70-458f-b157-0ddc229593cc)

  PUT: O método PUT atualiza um registro existente, para isso, e necessário enviar o ID do registro que deseja atualizar na uri
  e os novos dados para atualização no Body da requisição.
  ![put](https://github.com/user-attachments/assets/d729a136-38cf-4a9d-8ba0-ab9db7375b14)

  DELETE: Para deletar um registro existente, basta informar o ID do registro desejado na URL da requisição.
  ![delete](https://github.com/user-attachments/assets/94c89e58-b5f4-4892-8bf7-8b4573221786)

