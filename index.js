import express from "express";

const app = express();
const porta = 2112;

// Rotas
app.get('/', (req, res) => {
    res.send(`API de alunos com Node.js, Express e MySQL`);
});

//Endpoint (rota) para todos os alunos da API
app.get('/alunos', (req,res)=>{
    res.send(`Dados de todos os alunos`);
});

// Endpoint (rotas) para dados de Um aluno da API
app.get('/alunos/:id', (req, res)=>{
    res.send(`Dados de UM aluno`)
});


//POST: Endpoint parar inserir novos alunos
app.post('/alunos', (req,res)=>{
    res.send(`Inserindo um aluno`);
});
//PUT: Endpoint para atualizar todos os dados de um aluno
// app.put('/alunos/:id', (req, res)=>{
//     res.send(`Atualizando todos os Dados de UM aluno`)
// });

//PATCH: Endpoint para atualizar todos/alguns dados de um aluno
app.patch('/alunos/:id', (req, res)=>{
    res.send(`Atualizando alguns ou todos Dados de UM aluno`)
});
//DELETE: Endpoint para excluir alunos
app.delete('/alunos/:id', (req, res)=>{
    res.send(`Excluindo UM alunos`)
});




// Configurando a execução do servidor Express
app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`);
});

