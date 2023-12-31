class ShoppingBasket {
  constructor() {
    this.discount = 0;
    this.candies = [];
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    console.log("Total Price:", totalPrice);
    console.log("Discount:", this.discount);

    return totalPrice - this.discount;
  }
}