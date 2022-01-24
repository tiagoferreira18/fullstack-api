import express from "express";

const app = express();
const porta = 2112;

// Rotas
app.get('/', (req, res) => {
    res.send(`API de alunos com Node.js, Express e MySQL`);
});


// Configurando a execução do servidor Express
app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`);
});