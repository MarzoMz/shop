import Component from 'ui/Component.js';
import Model from './Model.js';
import TEMPLATE from './ShopApp.html';

export default class ShopApp extends Component {

  static TEMPLATE = TEMPLATE;

  static PROPS = {

    currentItems: {}  // contains currently selected goods
  };


  // adds items to the cart
  addItemsToCart() {


  }

  // completely clears the cart
  clearCart() {


  }






  onItemSelected({ value }) {

    this.currentItems = value;
  }
}

Component.registerType(ShopApp);
