class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
  get namee() {
    return this.name;
  }
  get emailee() {
    return this.email;
  }
  get genderr() {
    return this.gender;
  }

  set namee(value) {
    value = this.name;
  }
  set emailee(value) {
    value = this.email;
  }
  set genderr(value) {
    value = this.gender;
  }

  toStr(n) {
    return n.toString();
  }
}

let k = new Author(2, "mail", "male");
console.log(k.toStr(k.name));

class book {
  constructor(title, author, quantity, price) {
    this.title = title;
    this.author = author;
    this.quantity = quantity;
    this.price = price;
  }

  get titt() {
    return this.title;
  }
  get aut() {
    return this.author;
  }
  get quan() {
    return this.quantity;
  }
  get pr() {
    return this.price;
  }

  set titt(value) {
    this.title = value;
  }
  set aut(value) {
    value = this.aut;
  }
  set quan(value) {
    value = this.quan;
  }
  set pr(value) {
    value = this.pr;
  }

  toStr(n) {
    return n.toString();
  }

  getProfit() {
    return "profit from this book:" + this.price * this.quantity;
  }
}
