const carScreen = document.querySelector('#carScreen')
const sendAllButton = document.querySelector('#submitBtnAll')
const sendCarButton = document.querySelector('#submitBtnCar')
const carField = document.querySelector('#car')

// constsubmitBtnCar
// const fs = require('fs');

let carros = {
  carro1: {
    brand: "Toyota",
    model: "Corolla",
    year: 2019,
    color: "Silver",
    plate: "ABC1234",
    fuel: "Gasoline",
    owner: "John Doe"
  },
  carro2: {
    brand: "Honda",
    model: "Civic",
    year: 2020,
    color: "Blue",
    plate: "DEF5678",
    fuel: "Gasoline",
    owner: "Jane Smith"
  },
  carro3: {
    brand: "Ford",
    model: "Focus",
    year: 2017,
    color: "Black",
    plate: "GHI9012",
    fuel: "Diesel",
    owner: "Michael Johnson"
  },
  carro4: {
    brand: "Chevrolet",
    model: "Malibu",
    year: 2018,
    color: "Red",
    plate: "JKL3456",
    fuel: "Gasoline",
    owner: "Emily Williams"
  },
  carro5: {
    brand: "BMW",
    model: "3 Series",
    year: 2021,
    color: "White",
    plate: "MNO7890",
    fuel: "Gasoline",
    owner: "David Brown"
  },
  carro6: {
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2016,
    color: "Grey",
    plate: "PQR1234",
    fuel: "Gasoline",
    owner: "Sophia Miller"
  }
};

//Ação realizada ao clicar em enviar
sendAllButton.onclick = function(e) {
  let lista = formatJSON(carros)
  // console.log(carrosNew)
  carScreen.textContent  = lista
}

function formatJSON(json){
  return JSON.stringify(json,null,4)
}

sendCarButton.onclick = function(){
  let carro = carField.value
  if(carro !== ''){
    alert('carro invalido')
    return
  }
  if(carros.hasOwnProperty(carro)){
    alert('carro não encontrado')
    return
  }
  let lista = carros[carro]
  lista = formatJSON(lista)
  // console.log(carrosNew)
  carScreen.textContent  = lista
}



// function cleanForm(form){
//   form.forEach(element => {
//     element.value = ''
//   })
// }
//Ação de enviar ao clicar em reset

// const pi = Math.PI
// Aréa do cículo A = pi*r² 
