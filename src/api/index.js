const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(express.json());

// Configuração do banco de dados
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'game_db'
});

// Rota para salvar os dados no banco
app.post('/:game_id/:user_id/:question_id/:card_id', (req, res) => {
    const { game_id, user_id, question_id, card_id } = req.params;
    const tutor_id = req.query.tutor || null;
    const group_id = req.query.group || null;

    const query = `INSERT INTO game_data (game_id, user_id, question_id, card_id, tutor_id, group_id) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [game_id, user_id, question_id, card_id, tutor_id, group_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Data saved successfully', id: results.insertId });
    });
});

// Rota para buscar dados do banco
app.get('/:game_id', (req, res) => {
    const { game_id } = req.params;
    const question_id = req.query.question || null;
    const group_id = req.query.group || null;

    let query = 'SELECT * FROM game_data WHERE game_id = ?';
    let params = [game_id];

    if (question_id) {
        query += ' AND question_id = ?';
        params.push(question_id);
    }
    if (group_id) {
        query += ' AND group_id = ?';
        params.push(group_id);
    }

    db.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
