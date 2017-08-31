class testtt {
  constructor() {
    // this.x = x;
    // this.y = y;
  }
  click1(e){
    console.log('1: ');
    console.log(e);
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

module.exports = testtt