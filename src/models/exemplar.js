import IllegalArgumentException from "./IllegalArgumentException";

export default class Exemplar {

  #idExemplar
  #status
  #qtdeEmprestimos

  constructor(idExemplar) {
    this.#idExemplar = idExemplar;
    this.#status = 0;
    this.#qtdeEmprestimos = 0;
  }

  get idExemplar() {
    return this.#idExemplar;
  }

  get status() {
    return this.#status;
  }

  get qtdeEmprestimos() {
    return this.#qtdeEmprestimos;
  }

  async registrarEmprestimo() {
    //Registra o empréstimo de um exemplar que esteja disponível ou reservado.

    if (this.#status === 4 || this.#status === 9) {
      throw new Error("Exemplar em status final não permite nenhuma operação");
    } else if (this.#status === 1 || this.#status === 2) {
      this.#status = 3;
      this.#qtdeEmprestimos++;
      return true;
    } else {
      return false;
    }
  }

  async registrarDevolucao() {
    //Registra a devolução do exemplar que esteja emprestado.

    if (this.#status === 4 || this.#status === 9) {
      throw new Error("Exemplar em status final não permite nenhuma operação");
    } else if (this.#status === 3) {
        if(this.#qtdeEmprestimos === 100){
            this.#status = 5
            this.#qtdeEmprestimos = 0
            return true
        }else{
            this.#status = 1
            return true
        }
    } else {
      return false;
    }
  }

  async alterarStatus(status) {
    //Recebe o novo status e altera o status do exemplar em situações específicas.

    switch (this.#status) {
      case 4:
      case 9:
        throw new Error(
          "Exemplar em status final não permite nenhuma operação"
        );

      case 0:
      case 2:
        this.#status = 1;
        return true;

      case 1:
        if (novoStatus === 2 || novoStatus === 5 || novoStatus === 9) {
          this.#status = novoStatus;
        } else {
          throw new IllegalArgumentException(
            "Novo status inválido para o status atual"
          );
        }
        return true;

      case 3:
        if (status === 4) {
          this.#status = status;
        } else {
          throw new IllegalArgumentException(
            "Novo status inválido para o status atual"
          );
        }
        return true;

      case 5:
        if (novoStatus === 1 || novoStatus === 2) {
          this.#status = novoStatus;
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
