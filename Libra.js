async function Cotação(){
    try { 
        var response = await fetch('https://api.hgbrasil.com/finance?format=json-cors&key=3982ff65 ')
        var data = await response.json()
        
        var ValorLibra = data['results']['currencies']['GBP']['buy']
        var Real3 =  document.getElementById('real3')
        Real3.innerHTML = ValorLibra.toFixed(2)
        
document.getElementById('libra').addEventListener('change', () =>{ 
        var Libra = document.getElementById('libra').value
        if(Libra == '' || Libra < 0){
            alert('Por favor, digite um valor válido')
        }else{
            var ValorApresentado3 = Libra * ValorLibra
            Real3.innerHTML = ValorApresentado3.toFixed(2)
        }
    })

} 
    catch (error) {
      console.error(error)  
    }
}

Cotação()

