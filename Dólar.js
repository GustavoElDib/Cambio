async function Cotação(){
    try { 
        var response = await fetch('https://api.hgbrasil.com/finance?format=json-cors&key=3982ff65 ')
        var data = await response.json()
        
        var ValorDolar = data['results']['currencies']['USD']['buy']
        var Real1 =  document.getElementById('real1')
        Real1.innerHTML = ValorDolar.toFixed(2)
        
document.getElementById('dólar').addEventListener('change', () =>{ 
        var Dólar = document.getElementById('dólar').value
        if(Dólar == '' || Dólar < 0){
            alert('Por favor, digite um valor válido')
        }else{
            var ValorApresentado1 = Dólar * ValorDolar
            Real1.innerHTML = ValorApresentado1.toFixed(2)
        }
    })

} 
    catch (error) {
      console.error(error)  
    }
}

Cotação()

