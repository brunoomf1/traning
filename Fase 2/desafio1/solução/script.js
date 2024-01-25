const sendButton = document.querySelector('[class="guessSubmit"]')
const showGuesses = document.querySelector('#showGuesses')
const textField = document.querySelector('#guessField')
const guesses = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')
const lastResult = document.querySelector('[class="lastResult"]')
const resetGame = document.querySelector('#restartSubmit')

// var randomNum = Math.floor(Math.random() * 100) + 1
const randomNum = 10
const retry = 10

let counter = 0
let guessesList = []


sendButton.onclick = function () {
	lastResult.removeAttribute('hidden')
	lowOrHi.removeAttribute('hidden')
	guesses.removeAttribute('hidden')

	let value = textField.value

	let backgroundColor = 'red'
	let lowOrHiText = ''
	let lastResultText = "Valor Inválido"

	value = parseInt(value)
	console.log(value)
	console.log(isNaN(value))

	if (!isNaN(value) && value <= 100 && value > 0) {
		counter += 1
		lastResultText = 'Errado!'

		showGuesses.removeAttribute('hidden')

		console.log(value)
		guessesList += value + ' '

		if (value < randomNum) {
			lowOrHiText = 'Seu palpite está muito baixo!'
		}
		if (value > randomNum) {
			lowOrHiText = 'Seu palpite está muito alto!'
		}
		if (counter >= retry) {
			resetGame.removeAttribute('hidden')
			textField.disabled = true
			sendButton.disabled = true
			lastResultText = "Não conseguiu, tente de novo!"
		}
		if (value === randomNum) {
			resetGame.removeAttribute('hidden')
			textField.disabled = true
			sendButton.disabled = true
			backgroundColor = 'green'
			lastResultText = "Parabéns, seu número está certo!"
		}
		lastResult.style.backgroundColor = backgroundColor
		lastResult.textContent = lastResultText
		lowOrHi.textContent = lowOrHiText
		guesses.textContent = guessesList
		textField.value = '';
		textField.focus();
	}
}

resetGame.onclick = function () {
	counter = 0
	textField.disabled = false
	sendButton.disabled = false
	lastResult.textContent = ''
	lastResult.style.backgroundColor = null
	guesses.textContent = []

	lastResult.setAttribute('hidden', 'true')
	lowOrHi.setAttribute('hidden', 'true')
	guesses.setAttribute('hidden', 'true')
	showGuesses.setAttribute('hidden', 'true')
	resetGame.setAttribute('hidden', 'true')
	textField.value = '';
	textField.focus();
}



