/// <reference types= "cypress" />

const advanced = false
const redColor = 'rgb(255, 0, 0)'
const greenColor = 'rgb(0, 128, 0)'
const target = 10

let lessThan10 = function() {
  return Math.floor(Math.random() * 9) + 1
}

let greatherThen10 = function() {
  return Math.floor(Math.random() * 90) + 11
}

let wrongGuesses = [
  lessThan10(), 
  lessThan10(), 
  lessThan10(), 
  lessThan10(), 
  greatherThen10(),
  greatherThen10(),
  greatherThen10(),
  greatherThen10(),
  greatherThen10()
]

const selectors = {
  guessField:"#guessField",
  guessSubmit:"#guessSubmit",
  restartSubmit:"#restartSubmit",
  lowOrHi:".lowOrHi",
  guesses:".guesses",
  guessesLabel:'#showGuesses',
  lastResult:".lastResult"
}



describe('template spec', () => {
  beforeEach(() => {
    cy.visit('cypress/fixtures/html.html')
  });
  it('1º Caso Coreto', () => {
    fillGuess(target);
    checkLastResult('Parabéns, seu número está certo!', greenColor);
    cy.get(selectors.restartSubmit)
      .should('be.visible')

    if(advanced == true){
      cy.get(selectors.guessField)
      .should('be.disabled')
      cy.get(selectors.guessSubmit)
      .should('be.disabled')
    }

  })
  
  it('9 casos incorretos', () => {
    wrongGuesses.forEach(element => {
      fillGuess(element)
      checkLastResult('Errado!', redColor);
      (element < target) ? checkLowOrHight("Seu palpite está muito baixo!") :checkLowOrHight('Seu palpite está muito alto!');
      cy.get(selectors.restartSubmit)
        .should('not.be.visible')
    });
  })

  it('10 casos incorretos', () => {
    wrongGuesses.forEach(element => {
      fillGuess(element)
      checkLastResult('Errado!', redColor);
      (element < target) ? checkLowOrHight("Seu palpite está muito baixo!") :checkLowOrHight('Seu palpite está muito alto!');
      checkGuessesList(element)
      cy.get(selectors.restartSubmit)
        .should('not.be.visible')
    });
    const value = 99
    fillGuess(value)
    checkGuessesList(value)
    checkLastResult('Não conseguiu, tente de novo!', redColor)
    cy.get(selectors.restartSubmit)
      .should('be.visible')

      if(advanced == true){
        cy.get(selectors.guessField)
        .should('be.disabled')
        cy.get(selectors.guessSubmit)
        .should('be.disabled')
      }
  })
  it('9 casos incorretos e 10º correto ', () => {
    wrongGuesses.forEach((element, index) => {
      fillGuess(element);

      checkLastResult('Errado!', redColor);

      (element < target) ? checkLowOrHight("Seu palpite está muito baixo!") :checkLowOrHight('Seu palpite está muito alto!');
      
      checkGuessesList(element)
    });
    fillGuess(target);
    checkLastResult('Parabéns, seu número está certo!', greenColor);
   
    cy.get(selectors.restartSubmit)
      .should('be.visible')

    if(advanced == true){
      cy.get(selectors.guessField)
      .should('be.disabled')
      cy.get(selectors.guessSubmit)
      .should('be.disabled')
    }
  })

  it('Verificando os limites de valors (0<= ou >100)', () => {
    
    wrongGuesses = [-1,0,101]

    wrongGuesses.forEach((element, index) => {
      fillGuess(element);

      checkLastResult('Valor Inválido', redColor);

      (element < target) ? checkLowOrHight("") :checkLowOrHight("");
      if(advanced == true){
        checkGuessesList(element,false)
      }
    });
    fillGuess(target);
    checkLastResult('Parabéns, seu número está certo!', greenColor);
    cy.get(selectors.restartSubmit)
      .should('be.visible')

    if(advanced == true){
      cy.get(selectors.guessField)
      .should('be.disabled')
      cy.get(selectors.guessSubmit)
      .should('be.disabled')
    }

  })

  it('Vericando click em reiniciar após 1º Caso Coreto', () => {
    fillGuess(target);
    checkLastResult('Parabéns, seu número está certo!', greenColor);
    cy.get(selectors.restartSubmit)
      .should('be.visible')

    if(advanced == true){
      cy.get(selectors.guessField)
      .should('be.disabled')
      cy.get(selectors.guessSubmit)
      .should('be.disabled')
    }
    checkRestartAction(advanced)

  })

  it('Vericando click em reiniciar após 9 casos incorretos e 10º correto', () => {
    wrongGuesses.forEach((element, index) => {
      fillGuess(element);

      checkLastResult('Errado!', redColor);

      (element < target) ? checkLowOrHight("Seu palpite está muito baixo!") :checkLowOrHight('Seu palpite está muito alto!');
      
      checkGuessesList(element)
    });
    fillGuess(target);
    checkLastResult('Parabéns, seu número está certo!', greenColor);
    cy.get(selectors.restartSubmit)
      .should('be.visible')

    if(advanced == true){
      cy.get(selectors.guessField)
      .should('be.disabled')
      cy.get(selectors.guessSubmit)
      .should('be.disabled')
    }
    checkRestartAction(advanced)

  })

  let checkRestartAction = function(advanced){
    cy.get(selectors.restartSubmit)
      .click()

    cy.get(selectors.guesses)
      .should('have.text','')
    cy.get(selectors.lastResult)
      .should('have.text','')

    cy.get(selectors.restartSubmit)
      .should('not.be.visible')

    if(advanced){
      cy.get(selectors.guessesLabel)
        .should('not.be.visible')
      cy.get(selectors.lastResult)
        .should('not.be.visible')
      cy.get(selectors.guessField)
        .should('be.enabled')
      cy.get(selectors.guessSubmit)
        .should('be.enabled')
    }
    
  }

  let checkLastResult = function (text, color) {
    cy.get(selectors.lastResult)
      .should('have.text', text)
      .should('have.css', 'background-color', color);
  }

  let fillGuess = function (value) {
    cy.get(selectors.guessField)
      .type(value);
    cy.get(selectors.guessSubmit)
      .click();
    cy.get(selectors.guessField)
      .should('be.empty')
  }

  let checkLowOrHight = function (value) {
    cy.get(selectors.lowOrHi)
      .should('have.text',value)
  }

  let checkGuessesList = function (guess,includes=true){
    cy.log(guess)
    let guessS = guess.toString()
    cy.log(guessS)
    cy.get(selectors.guesses)
      .invoke('text')
      .then(function(value){
        let valuesList = value.split(' ');
        (includes===true)
          ?expect(valuesList).to.includes(guessS)
          :expect(valuesList).to.not.includes(guessS)
      })
  }
})