async function Cotação(){
    try { 
        var response = await fetch('https://api.hgbrasil.com/finance?format=json-cors&key=3982ff65 ')
        var data = await response.json()

        var VariaçãoBitcoin = data['results']['currencies']['BTC']['variation']
        var PreçoBitcoin =  Math.ceil(data['results']['currencies']['BTC']['sell'])
        var LocalPreçoBTC = document.getElementById('PreçoBitcoin')
        var LocalVariaçãoBTC = document.getElementById('VariaçãoBitcoin')
        if(VariaçãoBitcoin > 0){
            LocalVariaçãoBTC.style.color = "#1eb980"
            LocalVariaçãoBTC.innerHTML = '+'+VariaçãoBitcoin.toFixed(2)+'%'
        }else if( VariaçãoBitcoin < 0){
            LocalVariaçãoBTC.style.color = "#ff5252"
            LocalVariaçãoBTC.innerHTML = VariaçãoBitcoin.toFixed(2)+'%'
        }else if( VariaçãoBitcoin == 0){
            LocalVariaçãoBTC.style.color = "rgb(163 157 157)"
            LocalVariaçãoBTC.innerHTML = VariaçãoBitcoin.toFixed(2)+'%'
        }
        LocalPreçoBTC.innerHTML += PreçoBitcoin.toLocaleString('pt-br')

} 
    catch (error) {
      console.error(error)  
    }
}

Cotação()
