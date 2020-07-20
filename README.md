# InfraTeste

Projeto contendo uma aplicação em NodeJS utilizada como formulário de comentários, onde devem serem inseridos os seguintes dados:
**Nome** 
**Email**
**Comentário**

Após clicar em "Enviar Dados", os dados são salvos em banco, e o usuário direcionado à página inicial (Formulário) novamente.

A aplicação, desenvolvida em NodeJS contém 1 view básica (index.ejs) que é a página do formulário.
Existe outra view (error.ejs) responsável pelo retorno de error, contendo uma mensagem, um descritivo do erro e o StackTrace, auxiliando o desenvolvedor a encontrar o problema que causou o erro.

Existem 3 routes:
**index.js**
    Responsável pelo gerenciamento de requisições da homepage (Formulário)
**metrics.js**
    Responsável pela coleta das métricas do NodeJS e envio ao prometheus
**users.js**
    Responsável por receber os dados vindos do formulário, processá-los, armazena-los e retornar o usuário à página inicial