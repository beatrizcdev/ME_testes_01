import Exemplar from "../models/exemplar";

let idExemplar = 1;

describe("CT021 Disponibiliza o exemplar e retorna status de sucesso", () => {

  test("Altera o status de 0 para 1", async () => {
    //Arrange
    const livro = new Exemplar(idExemplar);
    let resultado;

    //Act
    resultado = await livro.alterarStatus(1);

    //Assert
    expect(resultado).toBeTruthy();
    expect(livro.status).toBe(1);
  });
});

describe("CT022 Disponibilizar um exemplar que está reservado", () => {

  test("Alterar status para 1 de um livro com Status 2", async () => {
    //Arrange
    const livro = new Exemplar(idExemplar);
    livro.status = 2;

    //Act
    let resultado = await livro.alterarStatus(1);

    //Assert
    expect(resultado).toBeTruthy();
    expect(livro.status).toBe(1);
  });
});

describe("CT023 Reservar um exemplar que está disponível", () => {

  test("Alterar status para 2 de um livro com Status 1", async () => {
    //Arrange
    const livro = new Exemplar(idExemplar);
    livro.status = 1;

    //Act
    let resultado = await livro.alterarStatus(2);

    //Assert
    expect(resultado).toBeTruthy();
    expect(livro.status).toBe(2);
  });
});

describe("CT041 Descartar um exemplar perdido", () => {

  test("Retorna exemplar em status final", async () => {
    //Arrange
    const livro = new Exemplar(idExemplar);
    livro.status = 4;
    let resultado;

    //Act
    try {
      resultado = await livro.alterarStatus(9);
    } catch (e) {
      resultado = e.message;
    }

    //Assert
    expect(resultado).toBe(
      "Exemplar em status final não permite nenhuma operação"
    );
    expect(livro.status).toBe(4);
  });
});
