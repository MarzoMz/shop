import Observable from 'concepts/Observable.js';

class Model extends Observable {

  constructor() {

    super();

    this.list = this.restoreHotReload();
  }

  get counter() {

    return this.list.length;
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

const model = new Model();

export default store;
