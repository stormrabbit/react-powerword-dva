class Son {
  constructor(){
    super();
    this.say = () => {
      super.say();
      console.log('Mother disagree with that！');
    }
  }
}