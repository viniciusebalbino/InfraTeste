var express = require('express')
const graylog2 = require('graylog2');
var router = express.Router();
var db=require('../database');
const logger = new graylog2.graylog({
  servers: [{ 'host': 'graylog', port: 12201 }]
});

  router.get('/', function(res, next) { 
    res.render('users'); 
  });

  router.post('/create', function(req, res, next) {
  
    var name     = req.body.name;
    var email    = req.body.email;
    var comment  = req.body.comment;
      
    var sql = `INSERT INTO tb_form (kwf_name, kwf_email, kwf_comment ) VALUES ('${name}', '${email}', '${comment}' )`;

    db.query(sql,function (err, data) { 
        if (err) throw err;
           console.log("Dados inseridos com sucesso!");
           logger.log('Dados inseridos com sucesso!');
    });
   res.redirect('/');  // redirect to user form page after inserting the data
  }); 
  
  module.exports = router;
 