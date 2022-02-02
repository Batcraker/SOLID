///LSP  Liskov substitucion principle

class figura{
    area(){
        return 0;
    }
}

class REctangulo extends figura{
    constructor(ancho, alto){
        super();
        this.ancho = ancho
        this.alto = alto
    }

    area(){
        return this.ancho * this.alto;
    }
}

class Circulo extends figura{
    constructor(radio){
        super();
        this.radio = radio
    }

    area(){
        return Math.PI * (this.radio ** 2)
    }
}

const figuras = [
    new REctangulo(30, 20),
    new Circulo(8)
]

for (let figura of figuras) {
    console.log(figura.area())
}