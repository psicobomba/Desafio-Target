function isFibonacci(num) {
    let a = 0;
    let b = 1;

    // Aqui eu verifico diretamento os dois primeiros valores
    if (num === a || num === b) {
        return 'O numero ${num} pertence a sequencia de Fibonacci';
    }

    let next = a + b;

    // Aqui se calcula a sequencia de Fibonacci ate o que o primeiro numero seja maior ou igual ao numero informado
    while (next < num) {
        if (next === num) {
            return 'O numero ${num} pertence a sequencia de Fibonacci';
        }

        a = b;
        b = next;
        next = a + b;
    }

    return 'O numero ${num} não pertence a sequencia de Fibonacci';
}

// Input para o usuario inserir um numero
 let input = prompt("Informe um número para verificar se pertence a sequencia de Fibonacci");


// Converte a entrada para numero
 let numero = parseInt(input);

// Verifica a validade do numero
 if (!isNaN(numero)) {
     console.log(isFibonacci(numero));
 } else {
     console.log("O valor informado não é um numero, Por favor insira um numero valido");

 }