function calcular(tipo, valor){
  if(tipo === 'numero'){
    document.getElementById('display').value += valor
  }

  if(tipo === 'acao'){
    if(valor === 'c'){
      document.getElementById('display').value = ''
    }
    if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
      document.getElementById('display').value += valor
    }
    if(valor === '='){
      let total = document.getElementById('display').value
      resultado = eval(total)
      document.getElementById('display').value = resultado
    }
    if(valor === 'quadrado'){
      let total = document.getElementById('display').value
      resultado = Math.pow(total, 2)
      document.getElementById('display').value = resultado
    }
  }
}