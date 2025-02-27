const request = require('supertest');
const app = require('../index.js');

describe('Testes da API da Calculadora', () => {
    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 5, num2: 3, operacao: 'soma' });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ result: 8 });
    });

    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: 2, operacao: 'divisao' });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ result: 5});
    });

    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: 0, operacao: 'divisao' });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ erro: "Divisão por zero não é permitida.. Tente novamente!!!"});
    });
    
    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: 2, operacao: 'subtracao' });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ result: 8});
    });

    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: 2, operacao: 'multiplicacao' });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ result: 20});

    });

    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: "asd", operacao: 'soma' });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ erro: "O número2 está incorreta pois tem letras. Tente novamente!!"});
    });

    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: "asd", operacao: 'subtracao' });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ erro: "O número2 está incorreta pois tem letras. Tente novamente!!"});
    });

    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: "asd", operacao: 'divisao' });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ erro: "O número2 está incorreta pois tem letras. Tente novamente!!"});
    });

    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: "asd", operacao: 'multiplicacao' });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ erro: "O número2 está incorreta pois tem letras. Tente novamente!!"});
    });
});
