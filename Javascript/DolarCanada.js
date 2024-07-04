async function Cotação(){
    try { 
        var response = await fetch('https://api.hgbrasil.com/finance?format=json-cors&key=3982ff65 ')
        var data = await response.json()
        
        var ValorCanDolar = data['results']['currencies']['CAD']['buy']
        var Real5=  document.getElementById('real5')
        Real5.innerHTML = ValorCanDolar.toFixed(2)
        
document.getElementById('dolarCanada').addEventListener('change', () =>{ 
        var DolarCanada = document.getElementById('dolarCanada').value
        if(DolarCanada == '' || DolarCanada < 0){
            alert('Por favor, digite um valor válido')
        }else{
            var ValorApresentado5 = DolarCanada * ValorCanDolar
            Real5.innerHTML = ValorApresentado5.toFixed(2)
        }
    })

} 
    catch (error) {
      console.error(error)  
    }
}

Cotação()

