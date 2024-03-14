const sendButton = document.querySelector('[class="guessSubmit"]') // Botão de enviar
const showGuesses = document.querySelector('#showGuesses') // Label "Palpites Anteriores"
const textField = document.querySelector('#guessField') // Label "Digite seu palpite"
const guesses = document.querySelector('.guesses') // Lista de tentativas
const lowOrHi = document.querySelector('.lowOrHi') // Mensagem de ajuda
const lastResult = document.querySelector('[class="lastResult"]') // Resultado da tentativa
const resetGame = document.querySelector('#restartSubmit') // Botão de reset

// var randomNum = Math.floor(Math.random() * 100) + 1
const randomNum = 10 // Número randômico
const retry = 10 // Tentativas

let counter = 0 // define o contador como 0
let guessesList =''; // define o histórico como 0

sendButton.onclick = function () {
	lastResult.removeAttribute('hidden') //
	lowOrHi.removeAttribute('hidden')    // Remove o atributo hidden 
	guesses.removeAttribute('hidden')    //

	let value = textField.value // define a variavel value como o valor inserido no input
	let backgroundColor = 'red' 			// define a cor de fundo como vermelha
	let lowOrHiText = '' 					// define a mensagem de ajuda
	let lastResultText = "Valor Inválido"	// Define o resultado

	value = parseInt(value)	// Transforma o valor inserido em inteiro

	if (!isNaN(value) && value <= 100 && value > 0) { // Caso seja um numero, menor ou igual a 100 e maior que zero
		counter += 1 // adiciona uma interação ao contador
		lastResultText = 'Errado!' // define o resultado como "Errado"

		showGuesses.removeAttribute('hidden') //Exibe na tela
		console.log(counter)
		guessesList += value + ' ' // Monta a string com as tentativas
		
		if (value < randomNum) { // Caso o valor inserido seja menor que o correto, exibe a mensagem de ajuda 
			console.log("aq 1")
			lowOrHiText = 'Seu palpite está muito baixo!'
		}
		else if (value > randomNum) { // Caso o valor inserido seja maior que o correto, exibe a mensagem de ajuda 
			console.log("aq 2")
			lowOrHiText = 'Seu palpite está muito alto!'
		}

		if (counter >= retry) { // Caso seja atingido o valor máximo de tentativas
			console.log("aq 3")
			resetGame.removeAttribute('hidden') // exibe o botão reset
			textField.disabled = true // trava o input
			sendButton.disabled = true // trava o botão de enviar
			lastResultText = "Não conseguiu, tente de novo!" // exibe o resultado
		}
		if (value === randomNum) { // caso o valor seja igual
			console.log("aq 4")
			resetGame.removeAttribute('hidden') // exibe o botão de reset
			textField.disabled = true // trava o input
			sendButton.disabled = true // trava o botão de enviar
			backgroundColor = 'green' // altera a cor de fundo como verde
			lastResultText = "Parabéns, seu número está certo!" // altera o resultado
		}
	}

	lastResult.style.backgroundColor = backgroundColor //seta a cor de fundo na tela
	lastResult.textContent = lastResultText // seta o resultado final na tela
	lowOrHi.textContent = lowOrHiText // seta a mensagem de ajuda na tela
	guesses.textContent = guessesList // seta as tentativas na tela
	textField.value = ''; // limpa o input
	textField.focus(); // seta o foco para o input
}

resetGame.onclick = function () {
	counter = 0 // seta o contador como zero
	textField.disabled = false // destrava o input
	sendButton.disabled = false // destrava o botão de enviar
	lastResult.textContent = '' // define o resutado como vazio 
	lastResult.style.backgroundColor = null // remove a cor de fundo
	guessesList = '' // reseta a lista de tentativas
	guesses.textContent = '' // limpa a exibição em tela 

	lastResult.setAttribute('hidden', 'true') // Esconde o campo resultado
	lowOrHi.setAttribute('hidden', 'true') // Esconde o campo de ajuda
	guesses.setAttribute('hidden', 'true') // Esconde o campo de tentativas
	showGuesses.setAttribute('hidden', 'true') // Esconde o label
	resetGame.setAttribute('hidden', 'true') // Esconde o botão de reset
	textField.value = ''; // limpa o input
	textField.focus(); // seta o foco para o input
}


