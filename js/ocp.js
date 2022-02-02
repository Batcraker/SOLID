/* Principio ocp */

class Rectangulo{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    get_area(){
        return `Area: ${this.width * this.height} px`
    }

    get_perimeter(){
        return `Perimetro: ${((this.width * 2) + (this.height *2))} px`
    }

    //Puedo añadir mas funciones pero no modificar el codigo
}

const arr = [1,2,3,4,5,6,7,8,9]

const rectangulo = new Rectangulo(50, 90)
console.log(rectangulo.get_area())
console.log(rectangulo.get_perimeter());