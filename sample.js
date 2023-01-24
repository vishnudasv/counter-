function add(){
    var counter = document.getElementById('num')

    var newValue = parseInt(counter.innerHTML) + 1

    document.getElementById('num').innerHTML = newValue

    console.log(newValue)
    
}


function substract(){
    var counter = document.getElementById('num')

    var newValue = parseInt(counter.innerHTML) - 1

    if (newValue >= 0){
        document.getElementById('num').innerHTML = newValue
    }
   

    
    
    
}
function reset(){
    var counter = document.getElementById('num')

    var newValue = 0

    document.getElementById('num').innerHTML = newValue
}
