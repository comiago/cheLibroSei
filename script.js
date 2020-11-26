class book {
    constructor(title, author, publishingHouse, genre, student) {
      this.title = title;
      this.author = author;
      this.publishingHouse = publishingHouse;
      this.genre = genre;
      this.student = student;
    }
}

var vet = [];

vet = vet.concat(new book("Il fu Mattia Pascal", "Pirandello", "Giulio Einaudi Editore", "Psicologico", "Tommaso Accettola"));
vet = vet.concat(new book("Orwell 1984", "George Orwell", "Mondatori", "Fantasia", "Cristian Terramano"));
vet = vet.concat(new book("Assassinio sull’Orient Express", "Agata Christie", "Collins Crime Club", "Mistero", "Davide Ciofani"));
vet = vet.concat(new book("Il barone rampante", "Italo Calvino", "Mondadori", "Fantasia", "Carlo Cesta"));
vet = vet.concat(new book("Hello World", "Hannah Fry", "Bollati Boringhieri", "Jolly", "Hamza Qanit"));
vet = vet.concat(new book("Io non ho paura", "Niccolo’ Ammaniti", "Giulio Einaudi", "Psicologico", "Matteo Caricola"));
vet = vet.concat(new book("Per questo mi chiamo Giovanni ", "Luigi Garlando", "BUR Biblioteca Univ. Rizzoli", "Storico-realistico", "Giovanni Palleschi "));
vet = vet.concat(new book("Fontamara", "Ignazio Silone", "Arnoldo Mondadori Editore", "Storico-realistico", "Riccardo Iulianella"));
vet = vet.concat(new book("Il Piccolo Principe", "Antonie de Saint-Exupéry", "Reynal & Hitchcock, Gallimard", "Fantasia", "Luca Raschiatore"));
vet = vet.concat(new book("Narciso e Boccadoro", "Hermann Hesse", "Arnoldo Mondadori", "Psicologico", "Matteo Molinelli"));
vet = vet.concat(new book("Sherlock Holmes", "Conan Doyle", "Giulio Einaudi Editore", "Mistero", "Roberto Calabrese"));
vet = vet.concat(new book("IT", "Stephen King", "Viking Press", "Mistero", "Marcello Contestabile"));
vet = vet.concat(new book("L’amico ritrovato", "Fred Uhlman", "Feltrinelli", "Storico-realistico", "Alfredo Massaro"));
vet = vet.concat(new book("Il signore degli anelli", "J. R. R. Tolkien", "Allen & Unwin", "Fantasia", "Pierfrancesco Rodrigo"));
vet = vet.concat(new book("L’ombra del vento", "Carlos Ruiz Zafon", "Arnoldo Mondadori Editore", "Mistero", "Lorenzo Rosati"));
vet = vet.concat(new book("Il terzo gemello", "Ken Follet", "Mondadori", "Mistero", "Piero Serafini"));
vet = vet.concat(new book("Il giovane Holden", "J. D. Salinger", "Little Brown and Company", "Psicologico", "Giacomo Ciangoli"));
vet = vet.concat(new book("Ivanhoe", "Walter Scott", "BUR Biblioteca Univ. Rizzoli", "Storico-realistico", "Alex Mostacci"));
vet = vet.concat(new book("Battaglione d’assalto", "Sven Hassel", "BUR Biblioteca Univ. Rizzoli", "Storico-realistico", "Luca Di Carlo"));
vet = vet.concat(new book("Harry Potter", "J. K. Rowling", "Bloomsbury Publishing Plc", "Fantasia", "Leonardo Di Gianfilippo"));
vet = vet.concat(new book("La coscienza di Zeno", "Italo Svevo", "Cappelli a Bologna", "Psicologico", "Lorenzo Sabatini"));

var fantasia = {name:"Fantasia", score:0};
var mistero = {name:"Mistero", score:0};
var psicologico = {name:"Psicologico", score:0};
var storico = {name:"Storico-realistico", score:0};

function results(){
  $('.content').empty();
  $('.content').append("<div class=\"main-carousel\" data-flickity=\'{ \"cellAlign\": \"left\", \"contain\": true }\'></div>");
  var risultati = [fantasia, mistero, psicologico, storico]
  var massimo = {name:"", score:0};
  massimo = risultati[0];
  for (let i = 1; i < risultati.length; i++) {
    if(risultati[i].score > massimo.score){
      massimo = risultati[i];
    }
  }
  console.log(massimo.name + " " + massimo.score);
  $(".main-carousel").append("<a class=\"carousel-cell\"> Hello world </a>");
  for (let i = 0; i < vet.length; i++) {
    if (vet[i].genre == massimo.name){
      $(".main-carousel").append("<a class=\"carousel-cell\">" + vet[i].title + "</a>");
    } 
  }
}