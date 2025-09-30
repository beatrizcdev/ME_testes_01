export default class Exemplar{

    constructor(idExemplar){
        this.idExemplar = idExemplar
        this.status = 0
        this.qtdeEmprestimos = 0
    }

    get idExemplar(){
        return this.idExemplar
    }

    get status(){
        return this.status
    }

    get qtdeEmprestimos(){
        return this.qtdeEmprestimos
    }
}