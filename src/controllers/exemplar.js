import Exemplar from "../models/exemplar"

const livros = []

export async function Exemplar(idExemplar) {

    let exemplar = new Exemplar(idExemplar)
    livros.push(exemplar)
}