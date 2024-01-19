//Interações com os campos em tela
const sendButton = document.querySelector('[class="guessSubmit"]')
const textField = document.querySelector('#guessField')
const guesses = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')
const lastResult = document.querySelector('[class="lastResult"]')
const resetGame = document.querySelector('#restartSubmit')

// Numero aleatorio
// var randomNum = Math.floor(Math.random() * 100) + 1
  const randomNum = 10

//Ação realizada ao clicar em enviar
sendButton.onclick = function() {

  textField.value = '';
  textField.focus();
}

//Ação de enviar ao clicar em reset
resetGame.onclick = function(){

  textField.value = '';
  textField.focus();
}



