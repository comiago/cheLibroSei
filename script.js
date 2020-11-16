class libro {
    constructor(titolo, autore, punteggio, casaEditrice) {
      this.titolo = titolo;
      this.autore = autore;
      this.punteggio = punteggio;
      this.casaEditrice = casaEditrice;
    }
}

let libro1 = new libro("Hello World", "Hanna Fry", 23, "Bollati Boringhieri");

alert("Titolo libro1: " + libro1.name);