import Component from 'ui/Component.js';

export default class Container extends Component {

  static TEMPLATE =
/*    `<ul class="ui list">
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
    </ul>`;
*/

        // shows each element of given data
        <section>
          <article each="item of data"
                  >
                  {{item.name}}
          </article>

          <block if="data.length">
            <else>:emptyMessage</else>
          </block>
        </section>;


  static PROPS = {
    value: { default: null },
    valueChanged:{ },
    data: { default: [] },
    emptyMessage: { default: 'No goods' }
  }
}

Component.registerType(Container);
