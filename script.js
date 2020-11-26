class book {
    constructor(title, author, publishingHouse, genre, student, avatar, description, cover) {
      this.title = title;
      this.author = author;
      this.publishingHouse = publishingHouse;
      this.genre = genre;
      this.student = student;
      this.avatar = avatar;
      this.description = description;
      this.cover = cover;
    }
}

class profile {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

var vet = [];
var profiles = [];

vet = vet.concat(new book("Hello World", "Hannah Fry", "Bollati Boringhieri", "Jolly", "Hamza Qanit", "avatar/QANIT.png", "", "cover/QANIT-helloWorld.jpg"));
vet = vet.concat(new book("Il fu Mattia Pascal", "Pirandello", "Giulio Einaudi Editore", "Psicologico", "Tommaso Accettola", "avatar/ACCETTOLA.png", "", "cover/ACCETTOLA-fuMattiaPascal"));
vet = vet.concat(new book("Orwell 1984", "George Orwell", "Mondatori", "Fantasia", "Cristian Terramano", "avatar/TERRAMANO.png", "", "cover/TERRAMANO-1984.jpg"));
vet = vet.concat(new book("Assassinio sull’Orient Express", "Agata Christie", "Collins Crime Club", "Mistero", "Davide Ciofani", "avatar/CIOFANI.png", "", "cover/CIOFANI-assassinio.jpg"));
vet = vet.concat(new book("Il barone rampante", "Italo Calvino", "Mondadori", "Fantasia", "Carlo Cesta", "avatar/CESTA.png", "", "cover/CESTA-baroneRampante.jpg"));
vet = vet.concat(new book("Io non ho paura", "Niccolo’ Ammaniti", "Giulio Einaudi", "Psicologico", "Matteo Caricola", "avatar/CARICOLA.png", "", "cover/CARICOLA-nonHoPaura.jpg"));
vet = vet.concat(new book("Per questo mi chiamo Giovanni ", "Luigi Garlando", "BUR Biblioteca Univ. Rizzoli", "Storico-realistico", "Giovanni Palleschi", "avatar/PALLESCHI.png", "", "cover/PALLESCHI-perQuestoMotivo.jpg"));
vet = vet.concat(new book("Fontamara", "Ignazio Silone", "Arnoldo Mondadori Editore", "Storico-realistico", "Riccardo Iulianella", "avatar/IULIANELLA.png", "", "cover/IULIANELLA-fontamara.jpg"));
vet = vet.concat(new book("Il Piccolo Principe", "Antonie de Saint-Exupéry", "Reynal & Hitchcock, Gallimard", "Fantasia", "Luca Raschiatore", "avatar/RASCHIATORE.png", "", "cover/RASCHIATORE-piccoloPrincipe.jpg"));
vet = vet.concat(new book("Narciso e Boccadoro", "Hermann Hesse", "Arnoldo Mondadori", "Psicologico", "Matteo Molinelli", "avatar/MOLINELLI.png", "", "cover/MOLINELLI-narcisoEBoccadoro.jpg"));
vet = vet.concat(new book("Sherlock Holmes", "Conan Doyle", "Giulio Einaudi Editore", "Mistero", "Roberto Calabrese", "avatar/CALABRESE.png", "", "cover/CALABRESE-sherlockHolmes.jpg"));
vet = vet.concat(new book("IT", "Stephen King", "Viking Press", "Mistero", "Marcello Contestabile", "avatar/CONTESTABILE.png", "", "cover/CONTESTABILE-baroneRampante.jpg"));
vet = vet.concat(new book("L’amico ritrovato", "Fred Uhlman", "Feltrinelli", "Storico-realistico", "Alfredo Massaro", "avatar/MASSARO.png", "", "cover/MASSARO-lamicoRitrovato.jpg"));
vet = vet.concat(new book("Il signore degli anelli", "J. R. R. Tolkien", "Allen & Unwin", "Fantasia", "Pierfrancesco Rodrigo", "avatar/RODRIGO.png", "", "cover/RODRIGO-signoreDegliAnelli.jpg"));
vet = vet.concat(new book("L’ombra del vento", "Carlos Ruiz Zafon", "Arnoldo Mondadori Editore", "Mistero", "Lorenzo Rosati", "avatar/ROSATI.png", "", "cover/ROSATI-ombraDelVento.jpg"));
vet = vet.concat(new book("Il terzo gemello", "Ken Follet", "Mondadori", "Mistero", "Piero Serafini", "avatar/SERAFINI.png", "", "cover/SERAFINI-ilTerzoGemello.jpg"));
vet = vet.concat(new book("Il giovane Holden", "J. D. Salinger", "Little Brown and Company", "Psicologico", "Giacomo Ciangoli", "avatar/CIANGOLI.png", "", "cover/CIANGOLI-giovaneHolden.jpg"));
vet = vet.concat(new book("Ivanhoe", "Walter Scott", "BUR Biblioteca Univ. Rizzoli", "Storico-realistico", "Alex Mostacci", "avatar/MOSTACCI.png", "", "cover/MOSTACCI-ivanHoe.jpg"));
vet = vet.concat(new book("Battaglione d’assalto", "Sven Hassel", "BUR Biblioteca Univ. Rizzoli", "Storico-realistico", "Luca Di Carlo", "avatar/DI_CARLO.png", "", "cover/DI_CARLO-battaglioneDassalto.jpg"));
vet = vet.concat(new book("Harry Potter", "J. K. Rowling", "Bloomsbury Publishing Plc", "Fantasia", "Leonardo Di Gianfilippo", "avatar/DI_GIANFILIPPO.png", "", "cover/DI_GIANFILIPPO-harryPotter.jpg"));
vet = vet.concat(new book("La coscienza di Zeno", "Italo Svevo", "Cappelli a Bologna", "Psicologico", "Lorenzo Sabatini"), "avatar/SABATINI.png", "", "cover/SABATINI-zeno.jpg");

var fantasia = {name:"Fantasia", description: "Sei una persona attratta dal mistero e dall’ignoto e il tua curiosità ti spinge ad immergerti in ambienti sconosciuti fino ad arrivare a luoghi cupi e tenebrosi dove la paura fa da padrona. Il brivido però ti provoca un senso di piacere che, unito al mistero ancora svelare, ti fanno rimanere con il fiato sospeso pagina dopo pagina fino alla fine e ti trascinano nel corso dell’intero viaggio. Sei attratto da personaggi carismatici e pieni di coraggio che non si lasciano scoraggiare da nessuna minaccia, neanche da mostri o entità soprannaturali.", score:0};
var mistero = {name:"Mistero", description: "Maghi, giganti, draghi e creature fantastiche suscitano in te un fascino immenso così come le ambientazioni surreali e favolose ma anche gli ambienti politici medievali con i relativi intrighi e complotti. Hai un forte spirito di avventura e adori l’azione e il combattimento. Ti piacciono storie a lieto fino fine ma non ti dispiacciono neanche le tragedie e ti ritrovi nei personaggi che hanno il tuo stesso spirito avventuriero e voglia di scoprire cose nuove.", score:0};
var psicologico = {name:"Psicologico", description:"Sei un lettore dall’animo tranquillo. Ami immergerti nel passato e toccare gli avvenimenti di epoche remote, soprattutto i libri che le raccontano. Il tuo sogno sarebbe quello di poter volare in un’era diversa da quella usuale e rivivere gli usi e i costumi di quei tempi. Ti piace conoscere il passato per capire meglio il tuo presente. Per questo apprezzi questi generi che sono lo specchio per vivere dignitosamente nella società attuale.", score:0};
var storico = {name:"Storico-realistico", description: "Ricordi, emozioni, sogni ed eventi che vorresti rivivere si ripercuotono continuamente nel tuo inconscio. Prima di iniziare il test ti sei rilassato, concentrato solo su te stesso e ascoltato la tua voce interiore. Vuoi capire come la mente umana è in grado di ragionare, soprattutto le diverse sfaccettature comportamentali dell’uomo, in continua scoperta dei propri moti interiori. Il resto della scena non esiste, non conta. Solo tu, la tua mente e la tua storia.", score:0};

function results(){
  $('.content').empty();
  var risultati = [fantasia, mistero, psicologico, storico]
  var massimo = {name:"", score:0};
  massimo = risultati[0];
  for (let i = 1; i < risultati.length; i++) {
    if(risultati[i].score > massimo.score){
      massimo = risultati[i];
    }
  }
  $(".content").append("<h1>I tuoi risultati:</h1>");
  $(".content").append("<div class='section fadeIn'><div class='text'><h1 class='sectionTitle'>" + massimo.name + "</h1><p>" + massimo.description + "</p></div></div>")
  $(".content").append("<section class='cards'></section>")
  $(".cards").append("<a class='card bubble' title='Click To Open'><img src='" + vet[0].avatar + "' alt='Card Icon' class='cardIcon'><img src='" + vet[0].cover + "' alt='Card Icon' class='cardIcon'><h2 class='cardTitle'>" + vet[0].student + "</h2><p class='cardText'>" + vet[0].title + "</p><p class='cardText'>" + vet[0].description + "</p></a>");
  for (let i = 0; i < vet.length; i++) {
    if (vet[i].genre == massimo.name){
      $(".cards").append("<a class='card bubble' title='Click To Open'><img src='" + vet[i].avatar + "' alt='Card Icon' class='cardIcon'><img src='" + vet[i].cover + "' alt='Card Icon' class='cardIcon'><h2 class='cardTitle'>" + vet[i].student + "</h2><p class='cardText'>" + vet[i].title + "</p><p class='cardText'>" + vet[0].description + "</p></a>");
    } 
  }
}