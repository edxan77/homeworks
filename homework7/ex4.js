class Acount {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.ide = true;
  }

  get forid() {
    return this.id;
  }
  get forname() {
    return this.name;
  }
  get forbalance() {
    return this.balance;
  }

  set forname(value) {
    this.name = value;
  }
  set forbalance(value) {
    this.balance = value;
  }

  credit(amount) {
    this.balance = this.balance + amount;
    return "+" + amount + "in your balance";
  }

  debit(amount) {
    this.balance = this.balance - amount;
    if (this.balance - amount < 0) {
      this.balance = this.balance + amount;

      return console.log("wrong");
    }
    return "-" + amount + "at youre balance";
  }

  acid(ac1, ac2) {
    for (let m in ac1) {
      let b = 0;
      for (let k in ac2) {
        if (k != m) {
          continue;
        }
        if (k == m) {
          if (ac1[m] !== ac2[k]) {
            b++;
          }
        }
      }
      if (b == 1) {
        return (this.ide = false);
      }
    }
  }
}
