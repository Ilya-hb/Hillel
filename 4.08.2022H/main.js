const HAMBURGER = {
  size: {
    small: {
      name: 'small',
      price: 5,
      calories: 20
    },
    big: {
      name: 'big',
      price: 10,
      calories: 40
    }
  },
  toppings: {
    cheese: {
      price: 1,
      calories: 20
    },
    salad: {
      price: 2,
      calories: 5
    },

  },
  supplements: {
    flavoring: {
      price: 1.5,
      calories: 0
    },
    mayonnaise: {
      price: 2,
      calories: 5
    }
  }
}

class Hamburger {
  constructor(hamburgerSize) {
    this.size = hamburgerSize.name;
    this.price = hamburgerSize.price;
    this.calories = hamburgerSize.calories;
  }
  burgerCalc(array) {
    if (Array.isArray(array)) {
      array.forEach((item, i, array) => {
        this.price += array[i].price;
        this.calories += array[i].calories;

      })
    }
    else {
      this.price += array.price;
      this.calories += array.calories;
    }
  }
  addTopings(topping) {
    this.burgerCalc(topping);
  }
  addSupplement(supplements) {
    this.burgerCalc(supplements);
  }
  getInfo() {
    console.log(`Burger size: ${this.size} \nBurger price: ${this.price} \nBurger calories: ${this.calories}`);
  }
}
const burger = new Hamburger(HAMBURGER.size.big);
burger.getInfo();
burger.addSupplement(HAMBURGER.supplements.flavoring);
burger.addSupplement(HAMBURGER.supplements.mayonnaise);
burger.addTopings([HAMBURGER.toppings.cheese, HAMBURGER.toppings.salad]);
burger.getInfo();