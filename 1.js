function fibonacci(n) {
    
    let a = 0;
    let b = 1;
  
    while (b <= n) {
      if (b === n) {
        return true;
      }
      const temp = a + b;
      a = b;
      b = temp;
    }
    return false;
  }
  
  
  const numero = process.argv[2];
  if (fibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
  