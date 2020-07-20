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
Existem 3 routes: <br/>
**index.js** <br/>
__Responsável pelo gerenciamento de requisições da homepage (Formulário)<br/>
**metrics.js** <br/>
__Responsável pela coleta das métricas do NodeJS e envio ao prometheus<br/>
**users.js** <br/>
__Responsável por receber os dados vindos do formulário, processá-los, armazena-los e retornar o usuário à página inicial <br/>
<br/>
Na pasta **config** existem alguns arquivos consumidos pelo docker-compose.yaml para configurar os containers, sendo eles: <br/>
**dashboards.yml** <br/>
__Cria dentro do Grafana a dashboard ja pré configurada no arquivo grafana-dashboard.json <br/>
**datasource.yaml** <br/>
__Configura dentro do grafana o Prometheus como um datasource <br/>
**prometheus.yml** <br/>
__Configura dentro do prometheus os nodes à serem monitorados <br/>
<br/>
Na pasta **images** contém as imagens utilizadas pelo formulário web<br/>
<br/>
Existe também na raiz do projeto os arquivos:<br/>
**app.js**<br/>
__Contém todas as rotas do sistema<br/>
**Database.js**<br/>
__Strings de conexão com o banco de dados<br/>
**docker-compose.yaml**<br/>
__Arquivo responsável por toda configuração dos containers via docker-compose<br/>
**Dockerfile**<br/>
__Arquivo com as definições via dockerfile para o container do nodejs<br/>
**package.json**<br/>
__Arquivo com todas as dependências do projeto instaladas via npm install<br/>