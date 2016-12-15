'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var my_news = [{
  author: 'Саша Печкин',
  text: 'В четчерг, четвертого числа...',
  bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
}, {
  author: 'Просто Вася',
  text: 'Считаю, что $ должен стоить 35 рублей!',
  bigText: 'А евро 42!'
}, {
  author: 'Гость',
  text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
  bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
}];

window.ee = new EventEmitter();

var Article = React.createClass({
  displayName: 'Article',

  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      bigText: React.PropTypes.string.isRequired
    })
  },
  getInitialState: function getInitialState() {
    return {
      visible: false,
      rating: 0,
      eshe_odno_svoistvo: 'qweqwe'
    };
  },

  readmoreClick: function readmoreClick(e) {
    e.preventDefault();
    this.setState({ visible: true }, function () {
      alert('Состояние изменилось');
    });
  },

  render: function render() {
    var author = this.props.data.author,
        text = this.props.data.text,
        bigText = this.props.data.bigText,
        visible = this.state.visible;

    return React.createElement(
      'div',
      { className: 'article' },
      React.createElement(
        'p',
        { className: 'news__author' },
        author,
        ':'
      ),
      React.createElement(
        'p',
        { className: 'news__text' },
        text
      ),
      React.createElement(
        'a',
        { href: '#',
          onClick: this.readmoreClick,
          className: 'news__readmore ' + (visible ? 'none' : '') },
        '\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435'
      ),
      React.createElement(
        'p',
        { className: 'news__big-text ' + (visible ? '' : 'none') },
        bigText
      )
    );
  }
});

var News = React.createClass({
  displayName: 'News',

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      counter: 0
    };
  },

  render: function render() {
    var data = this.props.data;
    var newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map(function (item, index) {
        return React.createElement(
          'div',
          { key: index },
          React.createElement(Article, { data: item })
        );
      });
    } else {
      newsTemplate = React.createElement(
        'p',
        null,
        '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u043D\u0435\u0442'
      );
    }

    return React.createElement(
      'div',
      { className: 'news' },
      newsTemplate,
      React.createElement(
        'strong',
        { className: 'news__count ' + (data.length > 0 ? '' : 'none') },
        '\u0412\u0441\u0435\u0433\u043E \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439: ',
        data.length
      )
    );
  }
});

// --- добавили test input ---
var Add = React.createClass({
  displayName: 'Add',

  getInitialState: function getInitialState() {
    //устанавливаем начальное состояние (state)
    return {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    };
  },
  componentDidMount: function componentDidMount() {
    ReactDOM.findDOMNode(this.refs.author).focus();
  },
  onBtnClickHandler: function onBtnClickHandler(e) {
    e.preventDefault();
    var textEl = ReactDOM.findDOMNode(this.refs.text);

    var author = ReactDOM.findDOMNode(this.refs.author).value;
    var text = textEl.value;

    var item = [{
      author: author,
      text: text,
      bigText: '...'
    }];

    window.ee.emit('News.add', item);

    textEl.value = '';
    this.setState({ textIsEmpty: true });
  },
  onCheckRuleClick: function onCheckRuleClick(e) {
    this.setState({ agreeNotChecked: !this.state.agreeNotChecked }); //устанавливаем значение в state
  },
  // onAuthorChange: function(e) {
  //   if (e.target.value.trim().length > 0) {
  //     this.setState({authorIsEmpty: false})
  //   } else {
  //     this.setState({authorIsEmpty: true})
  //   }
  // },
  // onTextChange: function(e) {
  //   if (e.target.value.trim().length > 0) {
  //     this.setState({textIsEmpty: false})
  //   } else {
  //     this.setState({textIsEmpty: true})
  //   }
  // },

  onFieldChange: function onFieldChange(fieldName, e) {
    if (e.target.value.trim().length > 0) {
      this.setState(_defineProperty({}, '' + fieldName, false));
    } else {
      this.setState(_defineProperty({}, '' + fieldName, true));
    }
  },

  render: function render() {
    var agreeNotChecked = this.state.agreeNotChecked,
        authorIsEmpty = this.state.authorIsEmpty,
        textIsEmpty = this.state.textIsEmpty;
    return React.createElement(
      'form',
      { className: 'add cf' },
      React.createElement('input', {
        type: 'text',
        className: 'add__author',
        onChange: this.onFieldChange.bind(this, 'authorIsEmpty'),
        placeholder: '\u0412\u0430\u0448\u0435 \u0438\u043C\u044F',
        ref: 'author'
      }),
      React.createElement('textarea', {
        className: 'add__text',
        onChange: this.onFieldChange.bind(this, 'textIsEmpty'),
        placeholder: '\u0422\u0435\u043A\u0441\u0442 \u043D\u043E\u0432\u043E\u0441\u0442\u0438',
        ref: 'text'
      }),
      React.createElement(
        'label',
        { className: 'add__checkrule' },
        React.createElement('input', { type: 'checkbox', ref: 'checkrule', onChange: this.onCheckRuleClick }),
        '\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438'
      ),
      React.createElement(
        'button',
        {
          className: 'add__btn',
          onClick: this.onBtnClickHandler,
          ref: 'alert_button',
          disabled: agreeNotChecked || authorIsEmpty || textIsEmpty
        },
        '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u044C'
      )
    );
  }
});
var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      news: my_news
    };
  },
  componentDidMount: function componentDidMount() {
    var self = this;
    window.ee.addListener('News.add', function (item) {
      var nextNews = item.concat(self.state.news);
      self.setState({ news: nextNews });
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    window.ee.removeListener('News.add');
  },
  render: function render() {
    console.log('render');
    return React.createElement(
      'div',
      { className: 'app' },
      React.createElement(Add, null),
      React.createElement(
        'h3',
        null,
        '\u041D\u043E\u0432\u043E\u0441\u0442\u0438'
      ),
      React.createElement(News, { data: this.state.news })
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));