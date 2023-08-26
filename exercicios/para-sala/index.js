// arquivo para testes do exercicio exercicio-em-aula.md

// 1.

class Product {
  name;
  price;
  unit;

  constructor(name, price, unit) {
    this.name = name;
    this.price = price;
    this.unit = unit;
  }

  showDetails() {
    return `name: ${this.name}\nprice: ${this.price}\nunit: ${this.unit}`;
  }

  removeUnit(quantity) {
    this.unit -= quantity;
    return this.unit;
  }
}

class Client {
  name;
  cart = [];
  constructor(name) {
    this.name = name;
  }

  addToCart(product, quantity) {
    if (typeof quantity === "string" || typeof quantity === "boolean") {
      throw new Error("Não é possível depositar valores não numéricos");
    } else if (product.unit == 0) {
      throw new Error("Não temos mais desse produto");
    }

    this.cart.push({ product, quantity });

    console.log(`Adicionado ${product} ${quantity} ao carrinho`);
  }
  buyItem(nameItem) {
    //colocar verificadores e chamar removeUnit do item
    "...";
  }
}
// 2.
// 3.
// 4.
// 5.
