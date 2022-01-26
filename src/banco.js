import mysql from 'mysql2';

const conexao = mysql.createConnection({
    /* local */
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'escola'

    /* remoto */
    host: 'db4free.net',
    user: 'admin_api_tiagof',
    password: 'senac*123',
    database: 'escola_tiago_fer'

});

conexao.connect(erro =>{
    if(erro){
        console.log(`Erro ao conectar: ${erro.message}`);
    }else{
        console.log(`Banco de dados conectado em: ${conexao.config.host}`);
    }
});

export default conexao;