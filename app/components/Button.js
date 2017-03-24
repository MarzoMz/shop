import Component from 'ui/Component.js';

export default class Button extends Component {

  static TEMPLATE =
    `<button
      class="ui basic button btn"
      click=":click"
      >:caption</button>`;

  static PROPS = {
    caption: { default: '.....' },
    click: {  } };

  };

Component.registerType(Button);
