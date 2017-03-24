import Component from 'ui/Component.js';
import Model from './Model.js';
import TEMPLATE from './ShopApp.html';

export default class ShopApp extends Component {

  static TEMPLATE = TEMPLATE;

  static PROPS = {

    currentItems: {}  // contains currently selected goods in the goods list
    currentCartItems: {} // contains currently selected goods in the cart
  };


  get goods() {

    return Model.goods;
  }

  get cart() {

    return Model.cart;
  }

  // returns the number of goods in the cart
  get cartCounter() {

    return Model.cartCounter;
  }

  // returns the total price of goods in the cart
  get totalPrice() {

    return Model.totalPrice();
  }

  // adds items to the cart
  addItemsToCart() {

    Model.addItemsToCart(this.currentItems);
  }

  // completely clears the cart
  clearCart() {

    Model.clearCart();
  }

  // removes selected items from the cart
  removeSelected() {

    Model.clearSelected(this.currentCartItems);
  }

  // sorts the goods list by given parameter
  sortBy({ value }) {


  }



  onItemSelected({ value }) {

    this.currentItems = value;
  }
}

Component.registerType(ShopApp);
