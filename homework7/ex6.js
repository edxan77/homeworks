class jamacuyc {
  constructor() {
    this.name = "timer";
    this.second;
    this.minute;
    this.hourse;
  }
  start() {
    setInterval(this.body, 1000);
    return "start";
  }
  body() {
    let g = new Date();
    this.hourse = g.getHours();
    this.minute = g.getMinutes();
    this.second = g.getSeconds();

    if (this.second < 10) {
      this.second = "0" + this.second;
    }
    if (this.minute < 10) {
      this.minute = "0" + this.minute;
    }
    if (this.hourse < 10) {
      this.hourse = "0" + this.hourse;
    }

    return console.log(
      this.hourse.toString() + " " + ":",
      this.minute.toString() + " " + ":",
      this.second.toString()
    );
  }
  stop() {
    clearInterval(this.body);
    return "stoped";
  }
}
