# InfraTeste

Projeto contendo uma aplicação em NodeJS utilizada como formulário de comentários, onde devem serem inseridos os seguintes dados:<br/>
**Nome** <br/>
**Email** <br/>
**Comentário** <br/>
<br/>
Após clicar em "Enviar Dados", os dados são salvos em banco, e o usuário direcionado à página inicial (Formulário) novamente. <br/>
<br/>
A aplicação, desenvolvida em NodeJS contém 1 view básica (index.ejs) que é a página do formulário. <br/>
Existe outra view (error.ejs) responsável pelo retorno de error, contendo uma mensagem, um descritivo do erro e o StackTrace auxiliando o desenvolvedor a encontrar o problema que causou o erro. <br/>
<br/>
Existem 3 routes:<br/>
**index.js**<br/>
    Responsável pelo gerenciamento de requisições da homepage (Formulário)<br/>
**metrics.js**<br/>
    Responsável pela coleta das métricas do NodeJS e envio ao prometheus<br/>
**users.js**<br/>
    Responsável por receber os dados vindos do formulário, processá-los, armazena-los e retornar o usuário à página inicial<br/>