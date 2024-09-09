function verificarLetraA() {
    // Aqui obtem o valor de entrada
    let str = document.getElementById('entrada').value;

    // O nosso contador de A's
    let count = 0;

    // Verificamos cada caractere da string
    for (let i = 0; i < str.length; i++) {
      // Se o caractere é 'A' ou 'a', incrementamos o contador
      if (str[i].toLowerCase() === 'a') {
        count++;
      }
    }

    // Mostramos o resultado na tela
    if (count > 0) {
      document.getElementById('Resultado').innerText = `A letra 'A' ou 'a' aparece ${count} vezes na frase/palavra "${str}".`;
    } else {
      document.getElementById('Resultado').innerText = `A letra 'A' ou 'a' não aparece na frase/palavra "${str}".`;
    }
  }