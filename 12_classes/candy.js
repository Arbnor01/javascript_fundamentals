class Candy {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getName() {
      return this.name;
    }
  
    getPrice() {
      return this.price;
    }
  }

  class ShoppingBasket {
    constructor() {
      this.items = [];
    }
  
    getTotalPrice() {
        return this.items.map(item => item.getPrice()).reduce((total, price) => total + price, 0);
      }
  
    addItem(candy) {
      this.items.push(candy);
    }
  }
  
  module.exports = {
    Candy: Candy,
    ShoppingBasket: ShoppingBasket
  };