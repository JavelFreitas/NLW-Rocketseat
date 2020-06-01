import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios');
    response.json(['Guilherme', 'Fabiany', 'Javel']);
});

app.listen(3333);