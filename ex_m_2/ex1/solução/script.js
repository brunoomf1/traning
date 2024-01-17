//Interações com os campos em tela
const sendButton = document.querySelector('#radiusSubmit')
const radiusField = document.querySelector('#radiusField')
const circleAreaField = document.querySelector('#circleArea')
const circleAreaLabel = document.querySelector('#circleAreaLabel')
const reset = document.querySelector('#restartSubmit')

//Ação realizada ao clicar em enviar
sendButton.onclick = function () {
	let radiusValue = radiusField.value
	if(radiusValue.length === 0){
		alert('O campo não pode estar vazio')
		return
	}
	if (radiusValue < 0){
		lockInput(true)
		alert(`Valor Inválido!\nO raio deve ser maior que zero`)
		return
	}
	let circleArea = calculateRadius(radiusValue)
	circleAreaField.removeAttribute('hidden')
	circleAreaLabel.removeAttribute('hidden')
	circleAreaField.textContent = circleArea
	lockInput(true)
}

//Ação de enviar ao clicar em reset
reset.onclick = function () {
	cleanAll()
	lockInput(false)
	
}

function calculateRadius(radius) {
	const pi = Math.PI
	let area = pi * radius ** 2
	return area
}

function lockInput(disabled = true) {
	sendButton.disabled = disabled
	radiusField.disabled = disabled
	reset.disabled=!disabled
}

function cleanAll(){
	circleAreaField.setAttribute('hidden','true')
	circleAreaLabel.setAttribute('hidden','true')
	circleAreaField.textContent=null
	radiusField.value = '';
	radiusField.focus();
}