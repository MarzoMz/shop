import Component from 'ui/Component.js';
import Goods from './Goods.js';
import Cart from './Cart.js';
import TEMPLATE from './ShopApp.html';

export default class ShopApp extends Component {

  static TEMPLATE = TEMPLATE;

  static PROPS = {

    currentItems: { default: [0, 1]},  // contains currently selected goods in the goods list
    currentCartItems: { default: []} // contains currently selected goods in the cart
  };


  get goods() {

    return Goods.goods;
  }

  get cart() {

    return Cart.cart;
  }

  // returns the number of goods in the cart
  get cartCounter() {

    return Cart.cartCounter;
  }

  // returns the total price of goods in the cart
  get totalPrice() {

    return Cart.totalPriceCounter();
  }

  // adds items to the cart
  addItemsToCart() {

    Cart.addItemsToCart(this.currentItems);
  }

  // completely clears the cart
  clearCart() {

    Cart.clearCart();
  }

  // removes selected items from the cart
  removeSelected() {

    Cart.clearSelected(this.currentCartItems);
  }

  // sorts the goods list by given parameter
  sortBy({ value }) {

  }

  onItemSelected({ value }) {

    this.currentItems = value;
  }
}

Component.registerType(ShopApp);
