import Exemplar from "../models/exemplar";

describe('CT021 Disponibiliza o exemplar e retorna status de sucesso', () => {

    let idExemplar = 1

    it('Altera o status de 0 para 1', () => {
        //Arrange
        const livro = new Exemplar(idExemplar)

        //Act
        const resultado = livro.alterarStatus(1);

        //Assert
        expect(resultado).toBeTruthy();
        expect(livro.status).toBe(1)
    });
});