
import ClassData from './ex3Fonte/ClassData.mjs'
import jsonData from './lista.json' assert { type: 'json' };

let carList = Object.keys(jsonData)

carList.forEach(function (item) {

    let processData = new ClassData(jsonData[item])
    let date = new Date().getFullYear()

    processData.calculateAge(date)
    let response = processData.printData()
    console.log(response)

})