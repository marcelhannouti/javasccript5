function getRandom(numero) {
    console.log(numero)
    if (numero == 0){
      let resultado = "cara"
      return resultado        
    
      }else{
        let resultado = "cruz"
        return resultado
      }
  }
  let numero = Math.round(Math.random()*1);


console.log(getRandom(numero) )  


  