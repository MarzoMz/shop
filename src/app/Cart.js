import Observable from 'concepts/Observable.js';

class Cart extends Observable {

  constructor() {

    super();

    this.cart = [];
  }

  get cartCounter() {

    return this.cart.length;
  }

  get totalPriceCounter() {

    var total = 0;
    for (var i = 0; i < this.cart.length; i++) {
    total += this.cart[i].price;
    }
    return total;
  }

  addItemsToCart(items) {

    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      for (var x = 0; x < this.goods.length; x++) {
        if (item == this.goods[x]['id']) {
          this.cart.push(this.goods[x]);
        }
      }
    }

    alert(this.cart);
  }

  clearCart() {

    this.cart = [];
  }

  removeSelected(items) {

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      for (var x = 0; i < this.goods.length; x++) {
        if (item == this.goods[x].id) {
          delete this.goods[x];
        }
      }
    }
    this.update(this.cart);
  }

  update(delta) {

    Object.assign(this, delta);

    this.notify(delta);
  }

}

const store = new Cart();

export default store;
