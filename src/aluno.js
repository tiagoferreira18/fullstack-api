import conexao from './banco.js';

/* funções para o CRUD */

function ler(res){
    // comando SQL a ser executado
    const sql = "SELECT * FROM alunos ORDER BY nome";
    // executa a query a partir da conexao
    conexao.query(sql, (erro, resultados)=>{
        // função com os parametros de erro e resultados
        // se nao houver resultados
        if(resultados.length === 0){
            // indicamos o status de sem conteudo e encerra
            res.status(204).end();
            return; // para o script
        }
    
        /* Verificação basica por erro */
        if(erro){
            // deu ruim, indica o status 400 e exibe o erro
            res.status(400).json(erro.code);
        } else{
            // funcionou, entao status 200 (ok) e apresenta JSON
            res.status(200).json(resultados);
        }
    });
}

function inserir (aluno, res){
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) =>{
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({"status" : "aluno inserido!"})
            // res.status(201).end();
        }
    });
}

function lerUm(id, res){
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados)=>{
        
        if(resultados.length === 0){
            res.status(204).end();
            return;
        }

        if (erro){
            res.status(400).json(erro.code);
        }else{
            res.status(200).json(resultados[0]);
        }
    });
}

function atualizar(id, aluno, res){
    const sql = "UPDATE alunos SET ? WHERE id = ?";
    conexao.query(sql, [aluno, id], (erro,resultados) => {
        if(erro){
            res.status(400).json(erro.code);

        }else{
            // Saida simples de sucesso
            // res.status(200).json({"staus": "Atualizado com sucesso"})
            
            //  ...
            // -spread operator
            // -operador de "espalhamento" de objeto

            // saida mais detalhada
            res.status(200).json({...aluno, id});
        
        }
    });
}

export {ler, inserir, lerUm, atualizar};