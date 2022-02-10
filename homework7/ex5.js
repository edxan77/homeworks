class person {
  constructor(name, surname, gender, age) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.age = age;
  }
  get forname() {
    return this.name;
  }
  get forsurname() {
    return this.surname;
  }
  get forgender() {
    return this.gender;
  }
  get forage() {
    return this.age;
  }

  set forname(value) {
    this.name = value;
  }
  set forsurname(value) {
    this.surname = value;
  }
  set forgender(value) {
    this.gender = value;
  }
  set forage(value) {
    this.age = value;
  }

  toStr(n) {
    return n.toString();
  }
}

class student extends person {
  constructor() {
    super();

    this.program = ["IntroJs", "ReactJS"];
    this.pay = true;
    this.year = 1;
    this.passedexams = "";
  }
  get forprog() {
    return this.program;
  }
  get forpay() {
    return this.pay;
  }
  get foryear() {
    return this.year;
  }
  get forpassedexams() {
    return this.passedexams;
  }
  set forprog(value) {
    this.program = value;
  }
  set forpay(value) {
    this.pay = value;
  }
  set foryear(value) {
    this.year = value;
  }
  set forpassedexams(value) {
    this.passedexams = value;
  }
  passExam(programs, grade) {
    if (grade >= 50) {
      this.year = this.year + 1;
      this.passedexams = programs;
      return "You Sucessfuly passed exams";
    }
  }

  tpStr(n) {
    return n.toString();
  }
}

class teacher extends person {
  constructor(program, pay) {
    super();
    this.program = program;
    this.pay = pay;
  }

  get forprogram() {
    return this.program;
  }
  get forpay() {
    return this.pay;
  }
  set forpay(value) {
    this.pay = value;
  }
  set forprogram(value) {
    this.program = value;
  }
  toStr(n) {
    return n.toString();
  }
}
