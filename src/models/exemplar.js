import IllegalArgumentException from "./IllegalArgumentException";

export default class Exemplar {
  constructor(idExemplar) {
    this._idExemplar = idExemplar;
    this._status = 0;
    this._qtdeEmprestimos = 0;
  }

  get idExemplar() {
    return this._idExemplar;
  }

  get status() {
    return this._status;
  }

  get qtdeEmprestimos() {
    return this._qtdeEmprestimos;
  }

  async registrarEmprestimo() {
    //Registra o empréstimo de um exemplar que esteja disponível ou reservado.

    if (this._status === 4 || this._status === 9) {
      throw new Error("Exemplar em status final não permite nenhuma operação");
    } else if (this._status === 1 || this._status === 2) {
      this._status = 3;
      this._qtdeEmprestimos++;
      return true;
    } else {
      return false;
    }
  }

  async registrarDevolucao() {
    //Registra a devolução do exemplar que esteja emprestado.

    if (this._status === 4 || this._status === 9) {
      throw new Error("Exemplar em status final não permite nenhuma operação");
    } else if (this._status === 3) {
        if(this._qtdeEmprestimos === 100){
            this._status = 5
            this.qtdeEmprestimos = 0
            return true
        }else{
            this._status = 1
            return true
        }
    } else {
      return false;
    }
  }

  async alterarStatus(status) {
    //Recebe o novo status e altera o status do exemplar em situações específicas.

    switch (this._status) {
      case 4:
      case 9:
        throw new Error(
          "Exemplar em status final não permite nenhuma operação"
        );

      case 0:
      case 2:
        this._status = 1;
        return true;

      case 1:
        if (novoStatus === 2 || novoStatus === 5 || novoStatus === 9) {
          this._status = novoStatus;
        } else {
          throw new IllegalArgumentException(
            "Novo status inválido para o status atual"
          );
        }
        return true;

      case 3:
        if (status === 4) {
          this._status = status;
        } else {
          throw new IllegalArgumentException(
            "Novo status inválido para o status atual"
          );
        }
        return true;

      case 5:
        if (novoStatus === 1 || novoStatus === 2) {
          this._status = novoStatus;
        } else {
          throw new IllegalArgumentException(
            "Novo status inválido para o status atual"
          );
        }
        return true;

      default:
        return 0;
    }
  }
}
