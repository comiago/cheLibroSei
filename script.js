class book {
    constructor(title, author, score, publishingHouse) {
      this.title = title;
      this.author = author;
      this.score = score;
      this.publishingHouse = publishingHouse;
    }
}

// var libro1 = new libro("Hello World", "Hanna Fry", 23, "Bollati Boringhieri");
// vet.push(libro1);

var vet = [];

vet = vet.concat(new libro("Hello World", "Hanna Fry", 23, "Bollati Boringhieri"));

console.log(vet);