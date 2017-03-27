import Component from 'ui/Component.js';

export default class Container extends Component {

  static TEMPLATE =
   /*`<ul class="ui list">
        <li each="item of data"
          click=":updateOnClick"
          data-value=":item.id">
          <ListItemSelector
          value="{{item.id}}"
          pattern="{{value}}"
          hideCheckbox="true"
          >
          <span>{{item.name}}</span>
          </ListItemSelector>
          </li>
        <block if="data.length">
          <else><small class="empty">:emptyMessage</small></else>
        </block>
    </ul>`; */

`<div class="ui items">
  <div class="item" each="item of data">
    <GoodsSelector value="{{item.id}}"
                   pattern="{{value}}" />
    <div class="image">
      <img />
    </div>
    <div class="content">
      <a class="header">{{item.name}}</a>
      <div class="meta">
        <span>Description</span>
      </div>
      <div class="description">
        <p>{{item.description}}</p>
      </div>
      <div class="extra">
        Price: $ {{item.price}}
      </div>
    </div>
  </div>
  <block if="data.length">
    <else>:emptyMessage</else>
  </block>
</div>`;



  static PROPS = {
    value: { default: null },
    valueChanged:{ },
    data: { default: [] },
    emptyMessage: { default: 'No goods yet' }
  }
}

Component.registerType(Container);
