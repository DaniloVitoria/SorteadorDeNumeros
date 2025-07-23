const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const form = document.querySelector("form")
const repeatToggle = document.getElementById("repeatToggle")
const buttonfinal = document.getElementById("buttonfinal")


/*Vai ser do numero minimo que a pessoa escolher até o maximo que ela escolher, e vai exibir a quantidade de numero que a pessoa desejar */

    

form.addEventListener("submit", (event) =>{

    event.preventDefault()

    let Qtd = parseInt(card1.value)
    let min = parseInt(card2.value)
    let max = parseInt(card3.value)
    const allowRepeats = !repeatToggle.checked; // Se desmarcado: permite repetir

     let generatedNumbers = [];

     
    function logicOfNumbers(min, max) {
       
        return Math.floor(Math.random() * (max - min + 1)) + min
        
 
    }

      for (let i = 0; i < Qtd; i++) {
    let randomNumber;

    if (allowRepeats) {
      // Pode repetir
      randomNumber = logicOfNumbers(min, max);
    } else {
      // Não pode repetir
      do {
        randomNumber = logicOfNumbers(min, max);
      } while (generatedNumbers.includes(randomNumber));
    }

    generatedNumbers.push(randomNumber);
    console.log("Número gerado: " + randomNumber);
  }
})