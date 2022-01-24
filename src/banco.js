import mysql from 'mysql2';

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'

});

conexao.connect(erro =>{
    if(erro){
        console.log(`Erro ao conectar: ${erro.message}`);
    }else{
        console.log(`Banco de dados conectado com sucesso!`);
    }
});
