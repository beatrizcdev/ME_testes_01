import Exemplar from "../models/exemplar";

// describe('CT021 Disponibiliza o exemplar e retorna status de sucesso', () => {

//     let idExemplar = 1

//     test('Altera o status de 0 para 1', () => {
//         //Arrange
//         const livro = new Exemplar(idExemplar)
//         let resultado

//         //Act
//         resultado = livro.alterarStatus(1);

//         //Assert
//         expect(resultado).toBeTruthy();
//         expect(livro.status).toBe(1)
//     });
// });

// describe('CT041 Descartar um exemplar perdido', () => {

//     let idExemplar = 1

//     test('Retorna exemplar em status final', async () => {
//         //Arrange
//         const livro = new Exemplar(idExemplar)
//         await livro.alterarStatus(1)
//         await livro.alterarStatus(2)
//         await livro.alterarStatus(3)
//         await livro.alterarStatus(4)
//         let resultado

//         //Act
//         try {
//             resultado = await livro.alterarStatus(9);
//         } catch (e) {
//             resultado = e.message;
//         }

//         //Assert
//         expect(resultado).toBe("Exemplar em status final não permite nenhuma operação");
//         expect(livro.status).toBe(4)
//     });
// });

describe('CT023 Reservar um exemplar que está disponível', () => {

    let idExemplar = 2
    
    test('Alterar status para 1 de um livro com Status 2', async () => {
        
        //Arrange
        const livro = new Exemplar(idExemplar)
        livro.status = 1

        //Act
        let resultado  = await livro.alterarStatus(2)

        //Assert
        expect(resultado).toBeTruthy();
        expect(livro.status).toBe(2) 
    });
})