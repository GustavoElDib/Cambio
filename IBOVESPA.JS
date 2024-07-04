async function Cotação(){
    try { 
        var response = await fetch('https://api.hgbrasil.com/finance?format=json-cors&key=3982ff65 ')
        var data = await response.json()

        var PontoIBOVESPA = Math.ceil(data['results']['stocks']['IBOVESPA']['points']).toLocaleString('pt-br')
        var VariaçãoIbovespa = data['results']['stocks']['IBOVESPA']['variation']
        var LocalIBOVESPA = document.getElementById('PontosIbovespa')
        var LocalVariaçãoIbovespa = document.getElementById('VariaçãoIbovespa')
        LocalIBOVESPA.innerHTML = PontoIBOVESPA +' pts'

        if(VariaçãoIbovespa > 0){
            LocalVariaçãoIbovespa.style.color = "#1eb980"
            LocalVariaçãoIbovespa.innerHTML = '+'+ VariaçãoIbovespa.toFixed(2)+'%'
        }
        else if(VariaçãoIbovespa < 0){
            LocalVariaçãoIbovespa.style.color = "#ff5252"
            LocalVariaçãoIbovespa.innerHTML = VariaçãoIbovespa.toFixed(2)+'%'
        }
        else if(VariaçãoIbovespa == 0){
            LocalVariaçãoIbovespa.style.color = "rgb(163 157 157)"
            LocalVariaçãoIbovespa.innerHTML = VariaçãoIbovespa.toFixed(2)+'%'
        }

} 
    catch (error) {
      console.error(error)  
    }
}

Cotação()
