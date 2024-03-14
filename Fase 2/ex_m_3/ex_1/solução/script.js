const carForm = document.querySelectorAll('input')
const sendButton = document.querySelector('#submitBtn')
let today = new Date()
today = today.getFullYear()

let originalObject = {
  brand:'',
  model:'',
  year:'',
  color:'',
  plate:'',
  fuel:'',
  owner:'',

  calcularIdade: function(){
    let age = today - this.year
    return age
  },

  imprimirDados: function(){
    let data = `
    Marca :${this.brand}
    Modelo: ${this.model}
    Ano: ${this.year}
    Cor: ${this.color}
    placa: ${this.plate}
    Combustivel: ${this.fuel}
    Proprietário: ${this.owner}
    `
    return data
  }
}

//Interações com os campos em tela
const clonedObj = Object.assign({}, originalObject);

//Ação realizada ao clicar em enviar
sendButton.onclick = function(e) {
  e.preventDefault();
  processForm(carForm)
  cleanForm(carForm)
}

function processForm(carForm){
  let empty = []
  carForm.forEach(element => {
    const key = element.id
    const content = element.value
    if(content === ''){
      empty.push(key)
    }
    clonedObj[key] = content
  })
  if(empty.length !== 0){
    alert(`o(s) dado(s): ${empty.join(', ')} esta(ão) vazio(s)`)
    return
  }

  let age = clonedObj.calcularIdade()
  let acept =  confirm(`A idade ${age} anos esta correta?`)
  if(acept){
    let data = clonedObj.imprimirDados()
      response = alert(data)
  }
}


function cleanForm(form){
  form.forEach(element => {
    element.value = ''
  })
}
//Ação de enviar ao clicar em reset

// const pi = Math.PI
// Aréa do cículo A = pi*r² 
