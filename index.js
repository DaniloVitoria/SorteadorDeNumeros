const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const form = document.querySelector("form")
const repeatToggle = document.getElementById("repeatToggle")
const buttonfinal = document.getElementById("buttonfinal")




/*Elemento da div pai */
let part__two = document.querySelector(".part__two")

/*Esconder UI da div da direita*/
const hidden__UI = document.querySelector(".hidden__UI")

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

  



  hidden__UI.style.display = "none"



  part__two.classList.add("separete__content")


    /*Elementos do header*/
    let header = document.createElement("div")
    header.classList.add("headerafter")
    header.innerHTML = `<h2> Resultado do sorteio</h2> <span> 1&ordm; resultado</span>`



/*Adiciona as modificações na div 2 */
    part__two.appendChild(header)
   




    /*Laço de repetição para exibir todos os numero sorteados */
 let container__results_squares = document.createElement("div")


  for(let i = 0; i < generatedNumbers.length; i++){


    setTimeout(() => {
let transformNumber = String(generatedNumbers[i])
 /*Quadrados com o resultado do sorteio */
    let square__shape = document.createElement("div")
    square__shape.classList.add("square__show")


    /*Conteudo dentro do quadrado */
    let content__square = document.createElement("span")
    content__square.classList.add("square__content")
    content__square.innerHTML = transformNumber

    square__shape.appendChild(content__square)
     container__results_squares.appendChild(square__shape)



     
 console.log(i)
    }, i * 2700)



  }



 






 
  container__results_squares.classList.add("container__results_squares")
  part__two.appendChild(container__results_squares)
    


    
})