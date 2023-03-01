function calcularEstatisticas(faturamentoDiario) {
    const n = faturamentoDiario.length;
    const soma = faturamentoDiario.reduce((a, b) => a + b);
    const media = soma / n;
  
    
    let min = faturamentoDiario[0];
    let max = faturamentoDiario[0];
    for (let i = 1; i < n; i++) {
      if (faturamentoDiario[i] < min) {
        min = faturamentoDiario[i];
      }
      if (faturamentoDiario[i] > max) {
        max = faturamentoDiario[i];
      }
    }
  
    let diasAcimaDaMedia = 0;
    for (let i = 0; i < n; i++) {
      if (faturamentoDiario[i] > media) {
        diasAcimaDaMedia++;
      }
    }
  
    return {
      menorValor: min,
      maiorValor: max,
      diasAcimaDaMedia,
    };
  }
  
  
  const faturamentoDiario = [1000, 1200, 800, 1500, 900, 1100, 1300, 1400, 950, 1000, 1200, 1300, 1400, 1600, 1100, 1200, 1000, 1300, 1400, 1500, 1200, 1000, 800, 1100, 1200, 1300, 1400, 1500, 1600];
  const estatisticas = calcularEstatisticas(faturamentoDiario);
  
  console.log(`Menor valor: ${estatisticas.menorValor}`);
  console.log(`Maior valor: ${estatisticas.maiorValor}`);
  console.log(`Dias acima da média: ${estatisticas.diasAcimaDaMedia}`);
  