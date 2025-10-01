import { Exemplar } from "../controllers/exemplar";

beforeEach(async () => {
  let idExemplar = 1;
  await Exemplar(idExemplar);
  idExemplar++;
});
