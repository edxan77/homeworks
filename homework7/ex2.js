class Employee {
  constructor(name, surname, id, profession, salary, whours) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.profession = profession;
    this.salary = salary;
    this.whours = whours;
  }

  get namee() {
    return this.name;
  }
  get surnamee() {
    return this.surname;
  }
  get idd() {
    return this.id;
  }
  get professionn() {
    return this.profession;
  }
  get salaryy() {
    return this.salary;
  }
  get whourss() {
    return this.whours;
  }

  set namee(value) {
    value = this.name;
  }
  set surnamee(value) {
    value = this.surname;
  }
  set idd(value) {
    value = this.id;
  }
  set professionn(value) {
    value = this.profession;
  }
  set salaryy(value) {
    value = this.salary;
  }
  set whourss(value) {
    value = this.whours;
  }

  fullname() {
    return this.name.toString() + " " + this.surname.toString();
  }

  getAnullarSalary() {
    return this.salary * 365;
  }

  raiseSalary(percent) {
    let marge = (this.salary * percent) / 100;
    this.salary = this.salary + marge;
    return this.salary;
  }
}
