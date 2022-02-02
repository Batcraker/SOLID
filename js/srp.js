/* <-- Single responsability principle S */


const fs = require('fs')

//aplicando solid
//Class for list

class TodoList{
    constructor(){
        this.elements = [];
    }

    addItem(Text){
        this.elements.push(Text);
        return ['added', this.elements];
    }
}

///Class For save data in files

class DatabaseManager{
    saveDataFile(data, filename){
        fs.writeFileSync(filename, data.toString());
    }
}

//Class elements array

const Instancia = new TodoList();
const element = Instancia.addItem('Texto');
console.log(element[0])
console.log(element[1]);



//class for files
const NuevaInstancia = new DatabaseManager();
NuevaInstancia.saveDataFile('Datos a insertar', 'main.txt');