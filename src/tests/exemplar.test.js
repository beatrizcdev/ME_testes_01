import Exemplar from "../models/exemplar";

describe('CT021 Disponibiliza o exemplar e retorna status de sucesso', () => {

    let idExemplar = 1

    test('Altera o status de 0 para 1', () => {
        //Arrange
        const livro = new Exemplar(idExemplar)
        let resultado

        //Act
        resultado = livro.alterarStatus(1);

        //Assert
        expect(resultado).toBeTruthy();
        expect(livro.status).toBe(1)
    });
});

describe('CT041 Descartar um exemplar perdido', () => {

    let idExemplar = 1

    test('Retorna exemplar em status final', () => {
        //Arrange
        const livro = new Exemplar(idExemplar)
        livro.alterarStatus(1)
        livro.alterarStatus(3)
        livro.alterarStatus(4)
        let resultado

        //Act
        resultado = livro.alterarStatus(9);

        //Assert
        expect(resultado).toBe("Exemplar em status final não permite nenhuma operação");
        expect(livro.status).toBe(4)
    });
});