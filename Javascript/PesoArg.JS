async function Cotação(){
    try { 
        var response = await fetch('https://api.hgbrasil.com/finance?format=json-cors&key=3982ff65 ')
        var data = await response.json()
        
        var ValorDolar = data['results']['currencies']['ARS']['buy']
        var Real4 =  document.getElementById('real4')
        Real4.innerHTML = ValorDolar.toFixed(4)
        
document.getElementById('peso').addEventListener('change', () =>{ 
        var Peso = document.getElementById('peso').value
        if(Peso == '' || Peso < 0){
            alert('Por favor, digite um valor válido')
        }else{
            var ValorApresentado4 = Peso * ValorPeso
            Real4.innerHTML = ValorApresentado4.toFixed(2)
        }
    })

} 
    catch (error) {
      console.error(error)  
    }
}

Cotação()

