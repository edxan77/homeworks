class rectangle {
  constructor(lendth, width) {
    this.length = lendth;
    this.width = width;
  }
  get len() {
    return this.length;
  }

  get wid() {
    return this.width;
  }
  set len(value) {
    this.length = value;
  }

  set wid(value) {
    this.width = value;
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}
