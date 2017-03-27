import Observable from 'concepts/Observable.js';

class Goods extends Observable {

  constructor() {

    super();

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

  }

}

const store = new Model();

export default store;
