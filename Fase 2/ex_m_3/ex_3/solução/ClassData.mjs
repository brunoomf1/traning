class ProcessData{
    constructor(Object){
        this.brand = Object.brand
        this.model = Object.model
        this.year = Object.year
        this.color = Object.color
        this.plate = Object.plate
        this.fuel = Object.fuel
        this.owner = Object.owner
        this.age = Object.age
        this.data = Object.data
    }

    calculateAge(todayDate) {
        this.age = todayDate - this.year
    }

    printData(){
        this.data = `
        Marca :${this.brand}
        Modelo: ${this.model}
        Ano: ${this.year}
        Cor: ${this.color}
        placa: ${this.plate}
        Combustivel: ${this.fuel}
        Proprietário: ${this.owner}
        Idade: ${this.age}
        `
        return this.data
    }
}   
export default ProcessData
