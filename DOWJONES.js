async function Cotação(){
    try { 
        var response = await fetch('https://api.hgbrasil.com/finance?format=json-cors&key=3982ff65 ')
        var data = await response.json()
        
        var PontosDOWJONES = Math.ceil(data['results']['stocks']["DOWJONES"]['points']).toLocaleString('pt-br')
        var VariaçãoDOWJONES = data['results']['stocks']["DOWJONES"]['variation']
        var LocalDOWJONES = document.getElementById('PontosDOWJONES')
        var LocalVariaçãoDOWJONES = document.getElementById('VariaçãoDOWJONES')
        LocalDOWJONES.innerHTML = PontosDOWJONES + ' pts'
        if(VariaçãoDOWJONES > 0){
            LocalVariaçãoDOWJONES.style.color = "#1eb980"
            LocalVariaçãoDOWJONES.innerHTML = '+'+ VariaçãoDOWJONES.toFixed(2)+'%'
        }
        else if(VariaçãoDOWJONES < 0){
            LocalVariaçãoDOWJONES.style.color = "#ff5252"
            LocalVariaçãoDOWJONES.innerHTML = VariaçãoDOWJONES.toFixed(2)+'%'
        }
        else if(VariaçãoDOWJONES == 0){
            LocalVariaçãoDOWJONES.style.color = "rgb(163 157 157)"
            LocalVariaçãoDOWJONES.innerHTML = VariaçãoDOWJONES.toFixed(2)+'%'
        }
} 
    catch (error) {
      console.error(error)  
    }
}

Cotação()
