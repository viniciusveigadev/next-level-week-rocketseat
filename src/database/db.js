//Importar dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//Criar objeto que vai fazer operações no Banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//Exporta o db para ser utilizado pelo server através do "const db = require("./database/db")" 
module.exports = db

//Utilizar e inicialiazar o banco

// db.serialize(() => {

//Criar tabela

//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//Inserir dados

//     const query = `
//     INSERT INTO places(
//         image, 
//         name, 
//         address, 
//         address2, 
//         state, 
//         city, 
//         items
//     ) VALUES (?,?,?,?,?,?,?)
// `
//     const values = [
//         "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
//         "PaperSider",
//         "Guilherme Gemballa, Jardim América",
//         "260",
//         "Santa Catarina",
//         "Rio do sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

   // db.run(query, values, afterInsertData)

//Consultar dados

    // db.all(`SELECT name FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // })


//Deletar dado onde [index] é a posição do dado para ser deletado

//     db.run(`DELETE FROM places WHERE id = ?`, [1], function (err) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Registro deletado com sucesso!")
//     })

// })