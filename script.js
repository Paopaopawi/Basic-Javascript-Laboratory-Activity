function computeMainCourse() {
    let isSenior = document.getElementById('isSenior');
    let chicken = 247 * document.getElementById("chickenQty").value;
    let karekare = 120 * document.getElementById("karekareQty").value;
    let sinigang = 120 * document.getElementById("sinigangQty").value;

    let total = chicken + karekare + sinigang;
    document.getElementById("totalMain").innerText = total;
if(isSenior.checked){
        
            var discounted = total * 0.12;
            finaltotal = total - discounted;
            document.getElementById("totalMain").innerText = finaltotal;
         }
        
}

function computeDrinks() {
    let isSenior = document.getElementById('isSenior');
    let chicken = 77 * document.getElementById("chickenQty").value;
    let karekare = 77 * document.getElementById("karekareQty").value;
    let sinigang = 30 * document.getElementById("sinigangQty").value;

    let total = chicken + karekare + sinigang;
    document.getElementById("totalMain").innerText = total;
if(isSenior.checked){
        
            var discounted = total * 0.12;
            finaltotal = total - discounted;
            document.getElementById("totalMain").innerText = finaltotal;
         }
        
}

function computeDessert() {
    let isSenior = document.getElementById('isSenior');
    let chicken = 69 * document.getElementById("chickenQty").value;
    let karekare = 110 * document.getElementById("karekareQty").value;
    let sinigang = 110 * document.getElementById("sinigangQty").value;

    let total = chicken + karekare + sinigang;
    document.getElementById("totalMain").innerText = total;
if(isSenior.checked){
        
            var discounted = total * 0.12;
            finaltotal = total - discounted;
            document.getElementById("totalMain").innerText = finaltotal;
         }
}
