async function Cotação(){
    try { 
        var response = await fetch('https://api.hgbrasil.com/finance?format=json-cors&key=3982ff65 ')
        var data = await response.json()
        
        var PontosNASDAQ = Math.ceil(data['results']['stocks']['NASDAQ']['points']).toLocaleString('pt-br')
        var VariaçãoNASDAQ = data['results']['stocks']['NASDAQ']['variation']
        var LocalNASDAQ = document.getElementById('PontosNASDAQ')
        var LocalVariaçãoNASDAQ = document.getElementById('VariaçãoNASDAQ')
        LocalNASDAQ.innerHTML = PontosNASDAQ + ' pts'
        if(VariaçãoNASDAQ > 0){
            LocalVariaçãoNASDAQ.style.color = "#1eb980"
            LocalVariaçãoNASDAQ.innerHTML = '+'+ VariaçãoNASDAQ.toFixed(2)+'%'
        }
        else if(VariaçãoNASDAQ < 0){
            LocalVariaçãoNASDAQ.style.color = "#ff5252"
            LocalVariaçãoNASDAQ.innerHTML = VariaçãoNASDAQ.toFixed(2)+'%'
        }
        else if(VariaçãoNASDAQ == 0){
            LocalVariaçãoNASDAQ.style.color = "rgb(163 157 157)"
            LocalVariaçãoNASDAQ.innerHTML = VariaçãoNASDAQ.toFixed(2)+'%'
        }
} 
    catch (error) {
      console.error(error)  
    }
}

Cotação()
