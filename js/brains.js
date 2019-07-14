var miles = 0;
var mpg = 0;
var gas = 0;

function gasTotal(miles, mpg, gas){
    var total = miles/mpg;
    
    document.getElementById('totalOutput').innerHTML = (total * gas).toFixed(2);
}

document.getElementById('milesInput').addEventListener('input', function (e) {
    miles = e.target.value;
    gasTotal(miles, mpg, gas);
})

document.getElementById('mpgInput').addEventListener('input', function (e) {
    mpg = e.target.value;
    gasTotal(miles, mpg, gas);
})

document.getElementById('gasInput').addEventListener('input', function (e) {
    gas = e.target.value;
    gasTotal(miles, mpg, gas);
})
