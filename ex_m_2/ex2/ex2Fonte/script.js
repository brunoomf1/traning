//Interações com os campos em tela
const sendButton = document.querySelector('#sendSubmit')
const hightField = document.querySelector('#hightField')
const weightField = document.querySelector('#weightField')
const imcField = document.querySelector('#imcField')
const classificationField = document.querySelector('#classificationField')
const resultFields = document.querySelector('#resultDiv')
const reset = document.querySelector('#restartSubmit')

// IMC = PESO/(ALTURA²)
// IMC 				       | CLASSIFICAÇÃO   | OBESIDADE (GRAU)
// ------------------------------------------------------
// MENOR QUE 18,5	   | MAGREZA		     |	0
// ENTRE 18,5 E 24,9 | NORMAL		       |	0
// ENTRE 25,0 E 29,9 | SOBREPESO	     |	I
// ENTRE 30,0 E 39,9 | OBESIDADE	     |	II
// MAIOR QUE 40,0	   | OBESIDADE GRAVE |	III



// Number 1

// 

// Number 2

// 

//Ação realizada ao clicar em enviar
sendButton.onclick = function () {
	const hightValue = hightField.value
	const weightValue = weightField.value
	
  // Number 1
	let imcValue = ''; // passe função para calcular IMC 
	// 

  // Number 2
  let classificationValue = ''; // passe função para calcular passar a classificação do IMC
  // 

  resultFields.removeAttribute('hidden')
  imcField.textContent = imcValue
	classificationField.textContent = classificationValue

	lockInput(true)
}

//Ação de enviar ao clicar em reset
reset.onclick = function () {
	lockInput(false)
	cleanAll()
}
function lockInput(disabled) {
	hightField.disabled = disabled
	weightField.disabled = disabled
	sendButton.disabled = disabled
	reset.disabled = !disabled
}

function cleanAll() {
	imcField.textContent = null
	classificationField.textContent = null
	resultFields.setAttribute('hidden', 'true')
	hightField.value = '';
	weightField.value = '';
}


function formatNumber(input) {
	// Remove caracteres não numéricos
	var formatedNumber = input.value.replace(/[^\d]/g, '');

	// Se o valor é um número válido
	if (formatedNumber !== '') {
		// Divide por 100 e exibe no campo de entrada
		input.value = (parseFloat(formatedNumber) / 100).toFixed(2);
	}
}

