class User {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    getIntroduction() {
      return `Hi, my name is ${this.name}`;
    }
  }

  const user = new User('Arbnor');

  console.log(user.getName());

  console.log(user.getIntroduction());
  
  module.exports = User;
  