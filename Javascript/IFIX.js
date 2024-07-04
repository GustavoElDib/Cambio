async function Cotação(){
    try { 
        var response = await fetch('https://api.hgbrasil.com/finance?format=json-cors&key=3982ff65 ')
        var data = await response.json()
        
        var PontosIFIX = Math.ceil(data['results']['stocks']["IFIX"]['points']).toLocaleString('pt-br')
        var VariaçãoIFIX = data['results']['stocks']['IFIX']['variation']
        var LocalIFIX = document.getElementById('PontosIFIX')
        var LocalVariaçãoIFIX = document.getElementById('VariaçãoIFIX')
        LocalIFIX.innerHTML = PontosIFIX + ' pts'
        if(VariaçãoIFIX > 0){
            LocalVariaçãoIFIX.style.color = "#1eb980"
            LocalVariaçãoIFIX.innerHTML = '+'+ VariaçãoIFIX.toFixed(2)+'%'
        }
        else if(VariaçãoIFIX < 0){
            LocalVariaçãoIFIX.style.color = "#ff5252"
            LocalVariaçãoIFIX.innerHTML = VariaçãoIFIX.toFixed(2)+'%'
        }
        else if(VariaçãoIFIX == 0){
            LocalVariaçãoIFIX.style.color = "rgb(163 157 157)"
            LocalVariaçãoIFIX.innerHTML = VariaçãoIFIX.toFixed(2)+'%'
        }
} 
    catch (error) {
      console.error(error)  
    }
}

Cotação()
