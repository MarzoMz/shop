import Observable from 'concepts/Observable.js';

class Model extends Observable {

  constructor() {

    super();

    this.list = this.restoreHotReload();

    this.goods = [
      {          id: 0,
               name: "Something to buy",
              image: ".img/good1.jpg",
        description: "Some good words",
              price: 100
      },
      {          id: 1,
               name: "Something else to buy",
              image: ".img/good2.jpg",
        description: "Some good words",
              price: 200
      }
    ];

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
    alert(this.cart)
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

  restoreHotReload() {
    const hot = module && module.hot;
    if (hot) {

      hot.addStatusHandler(function (d) {});
      // hot.accept();
      hot.dispose( data2 => {
        data2.list = this.list;
      });
      const data = hot.data;
      if (data) {
        return data.list || [];
      }
    }
    return [];
  }
}

const store = new Model();

export default store;
