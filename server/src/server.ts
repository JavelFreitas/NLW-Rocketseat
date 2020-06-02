import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios');
    response.json(['Guilherme', 'Fabiany', 'Javel']);
});

app.post('/users', (request, response) => {
    const user = {
        name: "Javel",
        email: "javelqueiroz@outlook.com.br"
    }
    return response.json(user);
});
app.listen(3333);