import Component from 'ui/Component.js';
import Model from './Model.js';
import TEMPLATE from './ShopApp.html';

export default class ShopApp extends Component {

  static TEMPLATE = TEMPLATE;

  static PROPS = {

    current: {}
  };

  onInit() {

    Store.addObserver((event)=>this.invalidate(), this._id);
  }

  onDone() {

    Store.removeObserver(this._id);
  }

  get counter() {

    return Store.counter;
  }

  get list() {

    return Store.list;
  }


  onItemSelected({ value }) {

    this.current = value;
  }
}

Component.registerType(ShopApp);
