const express = require("express");

const app = express();
const port = 3000;




app.get('/', (req, res) => {
    res.send('Hello Word');
});

app.get('/calculadora', (req, res) => {
    const { num1, num2, operacao } = req.query;

    // Converter parâmetros para calcular
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Verifica se os parâmetros são números válidos
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ erro: "numero1 e numero2 devem ser convertidos corretamente" });
    }

    let result;

    switch (operacao) {
        case 'soma':
            result = number1 + number2;
            break;

        case 'subtracao':
            result = number1 - number2;
            break;

        case 'multiplicacao':
            result = number1 * number2;
            break;

        case 'divisao':
            if (number2 === 0) {
                return res.status(400).json({ erro: "Divisão por zero não é permitido !!" });
            }
            result = number1 / number2;
            break;

        default:
            return res.status(400).json({ erro: "Operação inválida!!" });
    }

    res.json({ result });
});


app.get('/primo', (req, res) => {
    const { numero } = req.query;

    
    const num = parseInt(numero, 10);

    
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
    
        if (num % 2 === 0 || num % 3 === 0) return false;
    
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        
       
        return true;
    }
    
    if (isNaN(num)) {
        return res.status(400).json({ erro: "O parâmetro 'numero' deve ser um número válido" });
    }

   
    const primo = isPrime(num);

    const mensagem = `O número ${num} ${primo ? "é" : "não é"} primo.`;
        res.json({ mensagem });
});

app.listen(port, () =>  {
    console.log(`Servidor rodando na porta ${port}`);
});

    
module.exports = app;