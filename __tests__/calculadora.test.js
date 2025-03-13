const request = require('supertest');
const app = require('../index.js');

describe('Testes da API da Calculadora', () => {
    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 5, num2: 3, operacao: 'soma' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 8 });
    });

    it('Deve realizar uma divisao corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: 2, operacao: 'divisao' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 5});
    });

    it('Deve realizar uma divisao corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: 0, operacao: 'divisao' });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ erro: "Divisão por zero não é permitida. Tente novamente!!!"});
    });
    
    it('Deve realizar uma subtracao corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: 2, operacao: 'subtracao' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 8});
    });

    it('Deve realizar uma multiplicacao corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: 2, operacao: 'multiplicacao' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 20});

    });

    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: "asd", operacao: 'soma' });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ erro: "numero1 e numero2 devem ser convertidos corretamente"});
    });

    it('Deve realizar uma subtracao corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: "asd", operacao: 'subtracao' });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ erro: "numero1 e numero2 devem ser convertidos corretamente"});
    });

    it('Deve realizar uma divisao corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: "asd", operacao: 'divisao' });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ erro: "numero1 e numero2 devem ser convertidos corretamente"});
    });

    it('Deve realizar uma multiplicacao corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ num1: 10, num2: "asd", operacao: 'multiplicacao' });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ erro: "numero1 e numero2 devem ser convertidos corretamente"});
    });
});
