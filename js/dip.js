/// Dependency inversion principle

class Primera {
    primera_funcion(){
        return 'primera funcion'
    }
}

class Segunda {
    segunda_funcion(){
        return 'segunda clase'
    }
}

class Tercera {
    tercera_funcion(){
        return 'Tercera clase'
    }
}

class fachada{
    constructor(){
        this.a = new Primera()
        this.b = new Segunda()
        this.c = new Tercera()
    }
}

class Externa{
    constructor(){
        this.fachada = new fachada();
    }
}

const externo = new Externa();

console.log(externo.fachada.a.primera_funcion())