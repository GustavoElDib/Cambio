async function Cotação(){
    try { 
        var response = await fetch('https://api.hgbrasil.com/finance?format=json-cors&key=3982ff65 ')
        var data = await response.json()

        var ValorEuro = data['results']['currencies']['EUR']['buy']
        var Real2 =  document.getElementById('real2')
        Real2.innerHTML = ValorEuro.toFixed(2)

document.getElementById('euro').addEventListener('change' , () =>{
        
        var Euro = document.getElementById('euro').value
        if(Euro == '' || Euro < 0){
            alert('Por favor, digite um valor válido')
        } else{
            var ValorApresentado2 = Euro * ValorEuro
            Real2.innerHTML =  ValorApresentado2.toFixed(2)
        }
    })

} 
    catch (error) {
      console.error(error)  
    }
}

Cotação()
