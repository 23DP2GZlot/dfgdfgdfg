
function fetchCatFact() {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            document.getElementById("fact").textContent = data.fact;
        })
}
function generateRandomNumber(){
    let randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").innerText = "Nejaušs cipars: " + randomNum;
}