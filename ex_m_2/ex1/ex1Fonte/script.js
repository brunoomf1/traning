//Interações com os campos em tela
const sendButton = document.querySelector('#radiusSubmit')
const radiusField = document.querySelector('#radiusField')
const circleAreaField = document.querySelector('#circleArea')
const circleAreaLabel = document.querySelector('#circleAreaLabel')
const reset = document.querySelector('#radiusSubmit')

//Ação realizada ao clicar em enviar
sendButton.onclick = function() {

}

//Ação de enviar ao clicar em reset
reset.onclick = function(){

  radiusField.value = '';
  radiusField.focus();
}


// const pi = Math.PI
// Aréa do cículo A = pi*r² 