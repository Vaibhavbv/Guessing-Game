let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = Math.floor(Math.random() * 100);

btn.addEventListener('click', function(){
  let input = document.getElementById('userInput').value;
  if(input == number){
    output.innerHTML = `you guessed it right , your number was ${number},   Congratulations!!!`
  } else if (input < number){
    output.innerHTML = "You guessed too low!"
  };
  if (input > number){
    output.innerHTML = "you guessed too high"
  }
})