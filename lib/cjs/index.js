'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
require('core-js/modules/es.array.concat');
require('core-js/modules/es.array.index-of');
require('core-js/modules/es.array.map');
require('core-js/modules/es.date.to-string');
require('core-js/modules/es.number.constructor');
require('core-js/modules/es.parse-int');
require('core-js/modules/es.regexp.exec');
require('core-js/modules/es.string.split');
require('regenerator-runtime/runtime');
require('core-js/modules/es.array.filter');
require('core-js/modules/es.string.search');
var reactRedux = require('react-redux');
var ReactCSSTransitionGroup = _interopDefault(require('react-addons-css-transition-group'));
require('core-js/modules/es.object.entries');
var redux = require('redux');
var update = _interopDefault(require('immutability-helper'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/* eslint-disable no-else-return */
var WarningMessages = function WarningMessages(_ref) {
  var sendWarningMessage = _ref.sendWarningMessage;

  if (sendWarningMessage) {
    return React__default.createElement(ReactCSSTransitionGroup, {
      transitionName: "fade",
      transitionEnter: 3000,
      transitionLeave: 3000
    }, React__default.createElement("div", {
      className: "warningMessages"
    }, React__default.createElement("p", {
      className: "messageOnTheScreen"
    }, sendWarningMessage)));
  } else {
    return '';
  }
};

var warnNowMessage = '';

var TypeMessage =
/*#__PURE__*/
function (_Component) {
  _inherits(TypeMessage, _Component);

  function TypeMessage(props) {
    var _this;

    _classCallCheck(this, TypeMessage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TypeMessage).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "warningMessageAnimation", function (getWarningMessage) {
      _this.setState({
        warningMessage: getWarningMessage
      });

      console.log('updated', _this.state.warningMessage);
      var timer = setTimeout(function () {
        clearTimeout(timer);

        _this.setState({
          warningMessage: null
        });
      }, 2000);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        content: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();

      if (_this.props.allMessages.length === 0 && _this.state.content !== '' && (_this.state.content === 'yes' || _this.state.content === 'Yes' || _this.state.content === 'YES' || _this.state.content === 'no' || _this.state.content === 'No' || _this.state.content === 'NO')) {
        console.log('tıklandı');

        _this.props.nextQuestion(_this.state);

        _this.setState({
          content: ''
        });
      } else if (_this.state.content !== '' && _this.props.allMessages.length !== 0) {
        var question = _this.props.allMessages[_this.props.allMessages.length - 1];

        if (question.type === 'control_datetime') {
          var devideDate = _this.state.content.split('-');

          if (question.format === 'ddmmyyyy' && devideDate.length > 0 && devideDate.length === 3) {
            if (Number(devideDate[0]) > 0 && Number(devideDate[0]) <= 31 && Number(devideDate[1]) > 0 && Number(devideDate[1] <= 12) && Number(devideDate[2]) > 1200 && Number(devideDate[2] <= new Date().getUTCFullYear())) {
              _this.props.addMessage(_this.state);

              warnNowMessage = '';

              _this.setState({
                content: ''
              });
            } else {
              warnNowMessage = 'Please write appropriate date';

              _this.setState({
                content: ''
              });
            }
          } else {
            warnNowMessage = 'Please write appropriate date';

            _this.setState({
              content: ''
            });
          }

          if (warnNowMessage !== '') {
            _this.warningMessageAnimation(warnNowMessage);
          }
        } else if (question.type === 'control_radio') {
          var radioOption = _this.state.content; // Check whether it is number or not and it's values contains their index numbers

          var divideOptions = question.options.split('|'); // eslint-disable-next-line no-restricted-globals

          if (isNaN(Number(radioOption))) {
            _this.warningMessageAnimation('Please write only number for option selection.');

            _this.setState({
              content: ''
            });
          } else {
            _this.setState({
              content: ''
            });

            var result = divideOptions.filter(function (divideOption) {
              return Number(radioOption) === divideOptions.indexOf(divideOption);
            });

            if (result.length > 0) {
              _this.props.addMessage(_this.state);
            } else {
              _this.warningMessageAnimation('Please write only appropriate option number');
            }
          }
        } else if (question.type === 'control_dropdown') {
          var _radioOption = _this.state.content; // Check whether it is number or not and it's values contains their index numbers

          var _divideOptions = question.options.split('|'); // eslint-disable-next-line no-restricted-globals


          if (isNaN(Number(_radioOption))) {
            _this.warningMessageAnimation('Please write only number for option selection.');

            _this.setState({
              content: ''
            });
          } else {
            _this.setState({
              content: ''
            });

            var _result = _divideOptions.filter(function (divideOption) {
              return Number(_radioOption) === _divideOptions.indexOf(divideOption);
            });

            if (_result.length > 0) {
              _this.props.addMessage(_this.state);
            } else {
              _this.warningMessageAnimation('Please write only appropriate option number');
            }
          } // if (warnNowMessage !== '') {
          //   this.warningMessageAnimation(warnNowMessage);
          // }

        } else if (question.type === 'control_email') {
          // eslint-disable-next-line no-inner-declarations
          var validateEmail = function validateEmail(radioOptions) {
            // eslint-disable-next-line no-useless-escape
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(radioOptions);
          };

          var _radioOption2 = _this.state.content;

          if (validateEmail(_radioOption2)) {
            _this.props.addMessage(_this.state);

            _this.setState({
              content: ''
            });
          } else {
            _this.setState({
              content: ''
            });

            _this.warningMessageAnimation('Please write appropriate email');
          }
        } else if (question.type === 'control_checkbox') {
          var _radioOption3 = _this.state.content;

          var _divideOptions2 = question.options.split('|'); // If there are options more than 1


          if (_radioOption3.length > 1) {
            if (_radioOption3.search(',') !== -1) {
              var saveMultipleOptions = {
                content: ''
              };
              var saveMultipleOpt = saveMultipleOptions;

              var divideRadioOption = _radioOption3.split(',');

              _this.setState({
                content: ''
              });

              for (var i = 0; i < _divideOptions2.length; i++) {
                for (var k = 0; k < divideRadioOption.length; k++) {
                  if (Number(divideRadioOption[k]) === _divideOptions2.indexOf(_divideOptions2[i])) {
                    if (i === _divideOptions2.length - 1) {
                      saveMultipleOpt.content = "".concat(saveMultipleOpt.content + _divideOptions2.indexOf(_divideOptions2[i]));
                    } else {
                      saveMultipleOpt.content = "".concat(saveMultipleOpt.content + _divideOptions2.indexOf(_divideOptions2[i]), ",");
                    }
                  } else {
                    // window.alert('Only related numbers can be added be careful');
                    continue;
                  }
                }
              }

              _this.props.addMessage(saveMultipleOpt);
            } else {
              _this.warningMessageAnimation('Please use only comma (,) to devide options');
            }
          } else {
            // If there is only 1 option
            _divideOptions2.map(function (item) {
              if (Number(_radioOption3) === _divideOptions2.indexOf(item)) {
                _this.props.addMessage(_this.state);

                return '-7 Yes you enterered appropriate number'; // eslint-disable-next-line no-else-return
              } else {
                _this.warningMessageAnimation('Please enter appropraite option');

                return 'Please write only appropriate option number';
              }
            });
          }
        } else {
          _this.props.addMessage(_this.state);

          _this.setState({
            content: ''
          });
        }
      }
    });

    _this.state = {
      content: '',
      warningMessage: null
    };
    _this.handleSendForm = _this.handleSendForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TypeMessage, [{
    key: "handleSendForm",
    value: function () {
      var _handleSendForm = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.sendForm();

              case 2:
                _context.next = 4;
                return this.props.sendFormInfo();

              case 4:
                this.setState({
                  content: ''
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSendForm() {
        return _handleSendForm.apply(this, arguments);
      }

      return handleSendForm;
    }() // eslint-disable-next-line max-statements

  }, {
    key: "render",
    value: function render() {
      if (this.props.saveFormQuestions.length === this.props.count) {
        return React__default.createElement("div", {
          className: "type_msg"
        }, React__default.createElement("div", {
          className: "input_msg_write"
        }, React__default.createElement("input", {
          type: "text",
          disabled: true,
          placeholder: this.props.message
        }), React__default.createElement("div", {
          className: "sendForm"
        }, React__default.createElement("input", {
          type: "button",
          className: "sendFormBtn",
          value: "Send Form",
          onClick: this.handleSendForm
        })))); // eslint-disable-next-line no-else-return
      } else {
        return React__default.createElement("div", null, React__default.createElement(WarningMessages, {
          sendWarningMessage: this.state.warningMessage
        }), React__default.createElement("div", {
          className: "type_msg"
        }, React__default.createElement("div", {
          className: "input_msg_write"
        }, React__default.createElement("input", {
          type: "text",
          className: "write_msg",
          value: this.state.content,
          onChange: this.handleChange,
          placeholder: this.props.message
        }), React__default.createElement("button", {
          className: "msg_send_btn",
          onClick: this.handleSubmit,
          type: "button"
        }, React__default.createElement("i", {
          className: "fa fa-paper-plane-o",
          "aria-hidden": "true"
        })))));
      }
    }
  }]);

  return TypeMessage;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    formId: state.formId,
    apiKey: state.apiKey,
    saveFormQuestions: state.saveFormQuestions,
    count: state.count,
    allMessages: state.allMessages
  };
};

var TypeMessage$1 = reactRedux.connect(mapStateToProps)(TypeMessage);

var JotPencil = "data:image/png;base64,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";

var OutgoingMessages = function OutgoingMessages(_ref) {
  var question = _ref.question;
  var tempDate = new Date(); // eslint-disable-next-line prefer-template

  var getHour = '';

  if (Number(tempDate.getHours()) >= 13) {
    getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' PM';
  } else {
    getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' AM';
  }

  if (question.type === 'control_datetime') {
    if (question.format === 'mmddyyyy') {
      return React__default.createElement("div", {
        className: "outgoing_msg",
        key: question.order
      }, React__default.createElement("div", {
        className: "outgoing_msg_img"
      }, React__default.createElement("img", {
        src: JotPencil,
        alt: "pencil"
      })), React__default.createElement("div", {
        className: "sent_msg"
      }, React__default.createElement("p", null, React__default.createElement("span", {
        className: "outgoing_msg_question"
      }, "".concat(question.text, " Format: MM-DD-YYYY"))), React__default.createElement("span", {
        className: "time_date"
      }, " ", getHour)));
    } else if (question.format === 'ddmmyyyy') {
      return React__default.createElement("div", {
        className: "outgoing_msg",
        key: question.order
      }, React__default.createElement("div", {
        className: "outgoing_msg_img"
      }, React__default.createElement("img", {
        src: JotPencil,
        alt: "pencil"
      })), React__default.createElement("div", {
        className: "sent_msg"
      }, React__default.createElement("p", null, React__default.createElement("span", {
        className: "outgoing_msg_question"
      }, "".concat(question.text, " Format: DD-MM-YYYY"))), React__default.createElement("span", {
        className: "time_date"
      }, " ", getHour)));
    } else if (question.format === 'yyyymmdd') {
      return React__default.createElement("div", {
        className: "outgoing_msg",
        key: question.order
      }, React__default.createElement("div", {
        className: "outgoing_msg_img"
      }, React__default.createElement("img", {
        src: JotPencil,
        alt: "pencil"
      })), React__default.createElement("div", {
        className: "sent_msg"
      }, React__default.createElement("p", null, React__default.createElement("span", {
        className: "outgoing_msg_question"
      }, "".concat(question.text, " Format: YYYY-MM-DD"))), React__default.createElement("span", {
        className: "time_date"
      }, " ", getHour)));
    }
  } else if (question.type === 'control_dropdown') {
    var divideOptions = question.options.split('|');
    return React__default.createElement("div", {
      className: "outgoing_msg",
      key: question.order
    }, React__default.createElement("div", {
      className: "outgoing_msg_img"
    }, React__default.createElement("img", {
      src: JotPencil,
      alt: "pencil"
    })), React__default.createElement("div", {
      className: "sent_msg"
    }, React__default.createElement("p", {
      key: question.order
    }, React__default.createElement("span", {
      className: "outgoing_msg_question"
    }, question.text), React__default.createElement("br", null), divideOptions.map(function (item) {
      return React__default.createElement("p", {
        className: "options_P",
        key: item
      }, "Type ", divideOptions.indexOf(item), " for: ", item);
    })), React__default.createElement("span", {
      className: "time_date"
    }, " ", getHour)));
  } else if (question.type === 'control_radio') {
    var _divideOptions = question.options.split('|');

    return React__default.createElement("div", {
      className: "outgoing_msg",
      key: question.order
    }, React__default.createElement("div", {
      className: "outgoing_msg_img"
    }, React__default.createElement("img", {
      src: JotPencil,
      alt: "pencil"
    })), React__default.createElement("div", {
      className: "sent_msg"
    }, React__default.createElement("p", {
      key: question.order
    }, React__default.createElement("span", {
      className: "outgoing_msg_question"
    }, " ", question.text, " "), React__default.createElement("br", null), _divideOptions.map(function (item) {
      return React__default.createElement("p", {
        className: "options_P",
        key: item
      }, "Type ", _divideOptions.indexOf(item), " for: ", item);
    })), React__default.createElement("span", {
      className: "time_date"
    }, " ", getHour)));
  } else if (question.type === 'control_checkbox') {
    var _divideOptions2 = question.options.split('|');

    return React__default.createElement("div", {
      className: "outgoing_msg",
      key: question.order
    }, React__default.createElement("div", {
      className: "outgoing_msg_img"
    }, React__default.createElement("img", {
      src: JotPencil,
      alt: "pencil"
    })), React__default.createElement("div", {
      className: "sent_msg"
    }, React__default.createElement("p", {
      key: question.order
    }, React__default.createElement("span", {
      className: "outgoing_msg_question"
    }, question.text), React__default.createElement("span", {
      className: "checkMultipleSelection"
    }, "(,) for multiple selection "), React__default.createElement("br", null), _divideOptions2.map(function (item) {
      return React__default.createElement("p", {
        className: "options_P",
        key: item
      }, "Type ", _divideOptions2.indexOf(item), " for: ", item);
    })), React__default.createElement("span", {
      className: "time_date"
    }, " ", getHour)));
  }

  return React__default.createElement("div", {
    className: "outgoing_msg",
    key: question.order
  }, React__default.createElement("div", {
    className: "outgoing_msg_img"
  }, React__default.createElement("img", {
    src: JotPencil,
    alt: "pencil"
  })), React__default.createElement("div", {
    className: "sent_msg"
  }, React__default.createElement("p", null, React__default.createElement("span", {
    className: "outgoing_msg_question"
  }, question.text)), React__default.createElement("span", {
    className: "time_date"
  }, " ", getHour)));
};

var UserImage = "data:image/png;base64,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";

var tempDate = new Date();
var getHour = '';

if (Number(tempDate.getHours()) >= 13) {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' PM';
} else {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' AM';
} // eslint-disable-next-line react/prop-types


var IncomingMessages = function IncomingMessages(_ref) {
  var messages = _ref.messages;
  return React__default.createElement("div", {
    className: "incoming_msg",
    key: messages.order
  }, React__default.createElement("div", {
    className: "incoming_msg_img"
  }, " ", React__default.createElement("img", {
    src: UserImage,
    alt: "sunil"
  })), React__default.createElement("div", {
    className: "received_msg"
  }, React__default.createElement("div", {
    className: "received_withd_msg"
  }, React__default.createElement("p", null, messages.message), React__default.createElement("span", {
    className: "time_date"
  }, " ", getHour))));
};

var tempDate$1 = new Date();
var getHour$1 = '';

if (Number(tempDate$1.getHours()) >= 13) {
  getHour$1 = tempDate$1.getHours() + ':' + tempDate$1.getMinutes() + ' PM';
} else {
  getHour$1 = tempDate$1.getHours() + ':' + tempDate$1.getMinutes() + ' AM';
} // eslint-disable-next-line react/prop-types


var YesNoMessages = function YesNoMessages(_ref) {
  var messages = _ref.messages;

  if (messages.toUpperCase() === 'YES') {
    return React__default.createElement("div", {
      className: "incoming_msg"
    }, React__default.createElement("div", {
      className: "incoming_msg_img"
    }, " ", React__default.createElement("img", {
      src: UserImage,
      alt: "sunil"
    })), React__default.createElement("div", {
      className: "received_msg"
    }, React__default.createElement("div", {
      className: "received_withd_msg"
    }, React__default.createElement("p", null, messages), React__default.createElement("span", {
      className: "time_date"
    }, " ", getHour$1))));
  } else if (messages.toUpperCase() === 'NO') {
    return React__default.createElement("div", null, React__default.createElement("div", {
      className: "incoming_msg"
    }, React__default.createElement("div", {
      className: "incoming_msg_img"
    }, " ", React__default.createElement("img", {
      src: UserImage,
      alt: "sunil"
    })), React__default.createElement("div", {
      className: "received_msg"
    }, React__default.createElement("div", {
      className: "received_withd_msg"
    }, React__default.createElement("p", null, messages), React__default.createElement("span", {
      className: "time_date"
    }, " ", getHour$1)))), React__default.createElement("div", {
      className: "outgoing_msg"
    }, React__default.createElement("div", {
      className: "outgoing_msg_img"
    }, React__default.createElement("img", {
      src: JotPencil,
      alt: "pencil"
    })), React__default.createElement("div", {
      className: "sent_msg"
    }, React__default.createElement("p", null, "Thank you for your answer. Please refresh the page to fullfill the form."), React__default.createElement("span", {
      className: "time_date"
    }, " ", getHour$1))));
  } else {
    return '';
  }
};

var tempDate$2 = new Date();
var getHour$2 = '';

if (Number(tempDate$2.getHours()) >= 13) {
  getHour$2 = tempDate$2.getHours() + ':' + tempDate$2.getMinutes() + ' PM';
} else {
  getHour$2 = tempDate$2.getHours() + ':' + tempDate$2.getMinutes() + ' AM';
}

var FinishMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FinishMessage, _React$Component);

  function FinishMessage() {
    _classCallCheck(this, FinishMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(FinishMessage).apply(this, arguments));
  }

  _createClass(FinishMessage, [{
    key: "render",
    value: function render() {
      // eslint-disable-next-line react/prop-types
      if (this.props.saveFormQuestions.length === this.props.count) {
        return React__default.createElement("div", {
          className: "outgoing_msg"
        }, React__default.createElement("div", {
          className: "outgoing_msg_img"
        }, React__default.createElement("img", {
          src: JotPencil,
          alt: "pencil"
        })), React__default.createElement("div", {
          className: "sent_msg"
        }, React__default.createElement("p", null, React__default.createElement("span", {
          className: "outgoing_msg_question"
        }, " You fulfilled the form. Please click Send Form button to send the form.")), React__default.createElement("span", {
          className: "time_date"
        }, getHour$2)));
      }

      return '';
    }
  }]);

  return FinishMessage;
}(React__default.Component);

var mapStateToProps$1 = function mapStateToProps(state) {
  return {
    formId: state.formId,
    apiKey: state.apiKey,
    saveFormQuestions: state.saveFormQuestions,
    count: state.count,
    allMessages: state.allMessages,
    username: state.username,
    yesNoMessage: state.yesNoMessage
  };
};

var FinishMessage$1 = reactRedux.connect(mapStateToProps$1)(FinishMessage);

var tempDate$3 = new Date();
var getHour$3 = '';

if (Number(tempDate$3.getHours()) >= 13) {
  getHour$3 = tempDate$3.getHours() + ':' + tempDate$3.getMinutes() + ' PM';
} else {
  getHour$3 = tempDate$3.getHours() + ':' + tempDate$3.getMinutes() + ' AM';
}

var SendFormMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SendFormMessage, _React$Component);

  // eslint-disable-next-line no-useless-constructor
  function SendFormMessage(props) {
    _classCallCheck(this, SendFormMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(SendFormMessage).call(this, props));
  }

  _createClass(SendFormMessage, [{
    key: "render",
    value: function render() {
      if (this.props.sendingMessage !== '') {
        // eslint-disable-next-line no-console
        console.log('send Info message in sendFormMessage page', this.props.sendingMessage);
        return React__default.createElement("div", {
          className: "outgoing_msg"
        }, React__default.createElement("div", {
          className: "outgoing_msg_img"
        }, React__default.createElement("img", {
          src: JotPencil,
          alt: "pencil"
        })), React__default.createElement("div", {
          className: "sent_msg"
        }, React__default.createElement("p", null, React__default.createElement("span", {
          className: "outgoing_msg_question"
        }, this.props.sendingMessage)), React__default.createElement("span", {
          className: "time_date"
        }, getHour$3)));
      }

      return '';
    }
  }]);

  return SendFormMessage;
}(React__default.Component);

var mapStateToProps$2 = function mapStateToProps(state) {
  return {
    formId: state.formId,
    apiKey: state.apiKey,
    saveFormQuestions: state.saveFormQuestions,
    count: state.count,
    allMessages: state.allMessages,
    username: state.username,
    yesNoMessage: state.yesNoMessage,
    sendingMessage: state.sendingMessage
  };
};

var SendFormMessage$1 = reactRedux.connect(mapStateToProps$2)(SendFormMessage);

var tempDate$4 = new Date();
var getHour$4 = '';

if (Number(tempDate$4.getHours()) >= 13) {
  getHour$4 = tempDate$4.getHours() + ':' + tempDate$4.getMinutes() + ' PM';
} else {
  getHour$4 = tempDate$4.getHours() + ':' + tempDate$4.getMinutes() + ' AM';
}

var MainContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(MainContainer, _Component);

  function MainContainer(props) {
    var _this;

    _classCallCheck(this, MainContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainContainer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "sendFormInfo", function () {
      return _this.props.dispatch({
        type: 'SEND_FORM_INFO',
        sendingMessage: 'You have sent your form successfully.'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateCount", function () {
      return _this.props.dispatch({
        type: 'UPDATE_COUNT_IN_NEXT_QUES',
        comingCount: _this.props.count
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveMessageDispatch", function () {
      return _this.props.dispatch({
        type: 'SAVE_MESSAGE',
        nexFormQuestion: _this.props.saveFormQuestions[_this.props.count]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "writeYes", function (message) {
      // eslint-disable-next-line prefer-const
      var contentMessage = message.content;
      return _this.props.dispatch({
        type: 'YESNO_MESSAGE',
        yesOrNoMessage: contentMessage
      });
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToBottom", function () {
      _this.heightRef.current.scrollTop = _this.heightRef.current.scrollHeight;
    });

    _defineProperty(_assertThisInitialized(_this), "updateQuestionMessage", function (message) {
      var contentMessage = message.content;
      console.log('message in updateQuestionMessage', contentMessage);
      return _this.props.dispatch({
        type: 'UPDATE_QUESTIONS_MESSAGE',
        message: contentMessage
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveMessageOfAddMessage", function () {
      return _this.props.dispatch({
        type: 'SAVE_MESSAGE',
        nexFormQuestion: _this.props.saveFormQuestions[_this.props.count]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sendForm", function () {
      var submitMessage = {};

      for (var i = 0; i < _this.props.allMessages.length; i++) {
        if (_this.props.allMessages[i].type === 'control_email') {
          var qid = _this.props.allMessages[i].qid; // submissions[qid]=this.props.allMessages[i].message;

          var message = _this.props.allMessages[i].message; // '3': { first: 'berkay', last: 'test' },

          submitMessage[qid] = message;
        } else if (_this.props.allMessages[i].type === 'control_fullname') {
          var _qid = _this.props.allMessages[i].qid;

          var divideFullname = _this.props.allMessages[i].message.split(' ');

          submitMessage[_qid] = {
            first: divideFullname[0],
            last: divideFullname[1]
          };
        } else if (_this.props.allMessages[i].type === 'control_dropdown') {
          var _qid2 = _this.props.allMessages[i].qid;

          for (var l = 0; l < _this.props.saveFormQuestions.length; l++) {
            if (_this.props.allMessages[i].order === _this.props.saveFormQuestions[l].order) {
              // Divide options according to |
              var divideOptions = _this.props.saveFormQuestions[l].options.split('|');

              console.log('gelen divide optionssss', divideOptions, "gelen all Messages option".concat(_this.props.allMessages[i].message));

              for (var k = 0; k < divideOptions.length; k++) {
                if (divideOptions.indexOf(divideOptions[k]) === parseInt(_this.props.allMessages[i].message)) {
                  console.log("e\u015Fiti yakalad\u0131m sen ".concat(divideOptions[k], "se\xE7mi\u015Fsin"), "allmessages message".concat(_this.props.allMessages[i].message)); // send selected options into submitMessage to send jotform

                  submitMessage[_qid2] = divideOptions[k];
                } else {
                  console.log("e\u015Fiti yakalayamad\u0131m".concat(_this.props.allMessages[i].message));
                }
              }
            }
          }
        } else if (_this.props.allMessages[i].type === 'control_radio') {
          var _qid3 = _this.props.allMessages[i].qid;

          for (var m = 0; m < _this.props.saveFormQuestions.length; m++) {
            if (_this.props.allMessages[i].order === _this.props.saveFormQuestions[m].order) {
              // Divide options according to |
              var _divideOptions = _this.props.saveFormQuestions[m].options.split('|');

              console.log('gelen divide optionssss', _divideOptions, "gelen all Messages option".concat(_this.props.allMessages[i].message));

              for (var n = 0; n < _divideOptions.length; n++) {
                if (_divideOptions.indexOf(_divideOptions[n]) === parseInt(_this.props.allMessages[i].message)) {
                  console.log("e\u015Fiti yakalad\u0131m sen ".concat(_divideOptions[n], "se\xE7mi\u015Fsin"), "allmessages message".concat(_this.props.allMessages[i].message)); // send selected options into submitMessage to send jotform

                  submitMessage[_qid3] = _divideOptions[n];
                } else {
                  console.log("e\u015Fiti yakalayamad\u0131m".concat(_this.props.allMessages[i].message));
                }
              }
            }
          }
        } else if (_this.props.allMessages[i].type === 'control_textarea') {
          var _qid4 = _this.props.allMessages[i].qid;
          var _message = _this.props.allMessages[i].message;
          submitMessage[_qid4] = _message;
        } else if (_this.props.allMessages[i].type === 'control_datetime') {
          var _qid5 = _this.props.allMessages[i].qid; // Divide datetime according to -

          var _divideOptions2 = _this.props.allMessages[i].message.split('-'); // send selected options into submitMessage to send jotform


          submitMessage[_qid5] = {
            month: _divideOptions2[0],
            day: _divideOptions2[1],
            year: _divideOptions2[2]
          };
        } else if (_this.props.allMessages[i].type === 'control_checkbox') {
          var _qid6 = _this.props.allMessages[i].qid; // Divide datetime according to -

          var divideMessageOptions = _this.props.allMessages[i].message.split(',');

          var sendCheckBoxArray = [];

          for (var y = 0; y < _this.props.saveFormQuestions.length; y++) {
            if (_this.props.allMessages[i].order === _this.props.saveFormQuestions[y].order) {
              // Divide options according to |
              var _divideOptions3 = _this.props.saveFormQuestions[y].options.split('|');

              console.log('gelen multiple Checkbox options', _divideOptions3, "gelen all Messages option".concat(_this.props.allMessages[i].message));

              for (var z = 0; z < _divideOptions3.length; z++) {
                for (var t = 0; t < _divideOptions3.length; t++) {
                  if (_divideOptions3.indexOf(_divideOptions3[z]) === parseInt(divideMessageOptions[t])) {
                    sendCheckBoxArray.push(_divideOptions3[z]);
                    console.log("e\u015Fle\u015Fen multiple checkboxlar".concat(_divideOptions3[z]));
                  } else {
                    console.log('multiple checkbox eşleşmedi');
                  }
                }

                submitMessage[_qid6] = sendCheckBoxArray;
              }
            }
          }
        }
      }

      var xhr = new XMLHttpRequest();
      console.log(submitMessage);
      xhr.open('POST', "https://api.jotform.com/form/".concat(_this.props.formId, "/submissions?apiKey=").concat(_this.props.apiKey));
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(JSON.stringify(submitMessage));

      _this.scrollToBottom();
    });

    _this.heightRef = React__default.createRef();
    _this.nextQuestion = _this.nextQuestion.bind(_assertThisInitialized(_this));
    _this.addMessage = _this.addMessage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MainContainer, [{
    key: "nextQuestion",
    value: function () {
      var _nextQuestion = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(message) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.writeYes(message);

              case 2:
                _context.next = 4;
                return this.updateCount();

              case 4:
                _context.next = 6;
                return this.saveMessageDispatch();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function nextQuestion(_x) {
        return _nextQuestion.apply(this, arguments);
      }

      return nextQuestion;
    }() // Next Question is shown in the screen

  }, {
    key: "addMessage",
    value: function () {
      var _addMessage = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(message) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('message in addMessage Func', message); //     //Firstly message is added into related question field's message field

                _context2.next = 3;
                return this.updateQuestionMessage(message);

              case 3:
                if (!(this.props.count < this.props.saveFormQuestions.length)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 6;
                return this.saveMessageOfAddMessage();

              case 6:
                _context2.next = 9;
                break;

              case 8:
                console.log('soru bitti');

              case 9:
                // Next question is added into allMessages redux store
                this.scrollToBottom();

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addMessage(_x2) {
        return _addMessage.apply(this, arguments);
      }

      return addMessage;
    }() // Text added to question's message properties

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React__default.createElement("div", {
        className: "mainContainer"
      }, React__default.createElement("h3", {
        className: "text-center"
      }, "Jotform ChatBot"), React__default.createElement("div", {
        className: "messaging"
      }, React__default.createElement("div", {
        className: "inbox_msg"
      }, React__default.createElement("div", {
        className: "mesgs"
      }, React__default.createElement("div", {
        className: "msg_history",
        ref: this.heightRef
      }, React__default.createElement("div", {
        className: "outgoing_msg"
      }, React__default.createElement("div", {
        className: "outgoing_msg_img"
      }, React__default.createElement("img", {
        src: JotPencil,
        alt: "pencil"
      })), React__default.createElement("div", {
        className: "sent_msg"
      }, React__default.createElement("p", null, React__default.createElement("span", {
        className: "outgoing_msg_question"
      }, "Hello ", this.props.username.toUpperCase(), ". Welcome to JotForm Chatbot")), React__default.createElement("span", {
        className: "time_date"
      }, " ", getHour$4))), React__default.createElement("div", {
        className: "outgoing_msg"
      }, React__default.createElement("div", {
        className: "outgoing_msg_img"
      }, React__default.createElement("img", {
        src: JotPencil,
        alt: "pencil"
      })), React__default.createElement("div", {
        className: "sent_msg"
      }, React__default.createElement("p", null, React__default.createElement("span", {
        className: "outgoing_msg_question"
      }, "Would you like to fullfill the form?  YES OR NO ?")), React__default.createElement("span", {
        className: "time_date"
      }, " ", getHour$4))),
      /* outgoing messages */
      React__default.createElement(YesNoMessages, {
        messages: this.props.yesNoMessage
      }), this.props.allMessages.map(function (item) {
        if (_this2.props.yesNoMessage.toUpperCase() === 'NO') {
          return '';
        } else {
          if (item.message === '') {
            return React__default.createElement(OutgoingMessages, {
              question: item
            });
          } else if (item.message !== '') {
            return [React__default.createElement(OutgoingMessages, {
              question: item
            }), React__default.createElement(IncomingMessages, {
              messages: item
            })];
          }

          return _this2.warning();
        }
      }),
      /* Finish messages */
      React__default.createElement(FinishMessage$1, null),
      /* Send Form Message */
      React__default.createElement(SendFormMessage$1, null)), React__default.createElement(TypeMessage$1, {
        message: "Write Something",
        warning: this.warning,
        sendForm: this.sendForm,
        addMessage: this.addMessage,
        sendFormInfo: this.sendFormInfo,
        nextQuestion: this.nextQuestion
      })))));
    }
  }]);

  return MainContainer;
}(React.Component);

var mapStateToProps$3 = function mapStateToProps(state) {
  return {
    formId: state.formId,
    apiKey: state.apiKey,
    saveFormQuestions: state.saveFormQuestions,
    count: state.count,
    allMessages: state.allMessages,
    username: state.username,
    yesNoMessage: state.yesNoMessage
  };
};

var MainContainer$1 = reactRedux.connect(mapStateToProps$3)(MainContainer);

var MainContent =
/*#__PURE__*/
function (_Component) {
  _inherits(MainContent, _Component);

  function MainContent() {
    _classCallCheck(this, MainContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainContent).apply(this, arguments));
  }

  _createClass(MainContent, [{
    key: "render",
    value: function render() {
      return React__default.createElement(MainContainer$1, null);
    }
  }]);

  return MainContent;
}(React.Component);

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, _getPrototypeOf(Login).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Api key has been initialied
      // eslint-disable-next-line react/prop-types
      var apiKey = this.props.apiKey;
      window.JF.initialize({
        apiKey: apiKey
      });
      var x = this; // Form questions are saved into redux store

      window.JF.getFormQuestions(this.props.formId, function (response) {
        Object.entries(response).map(function (_ref, i) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          value.message = '';
          return x.props.dispatch({
            type: 'SAVE_FORM_QUESTIONS',
            formQuestion: value
          });
        });
        console.log('props save form questions', x.props.saveFormQuestions);
      }, function (error) {
        console.log(error);
      });
      window.JF.getUser(function (response) {
        return x.props.dispatch({
          type: 'SAVE_USERNAME',
          getUsername: response.username
        });
      }, function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement("div", {
        className: "initializeForm"
      });
    }
  }]);

  return Login;
}(React__default.Component);

var mapStateToProps$4 = function mapStateToProps(state) {
  return {
    formId: state.formId,
    apiKey: state.apiKey,
    saveFormQuestions: state.saveFormQuestions
  };
};

var Login$1 = reactRedux.connect(mapStateToProps$4)(Login);

function App() {
  return React__default.createElement("div", {
    className: "App"
  }, React__default.createElement(Login$1, null), React__default.createElement(MainContent, null));
}

var ProviderComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ProviderComponent, _Component);

  // eslint-disable-next-line no-useless-constructor
  function ProviderComponent(props) {
    var _this;

    _classCallCheck(this, ProviderComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProviderComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "reducer", function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'SAVE_MESSAGE':
          return _objectSpread2({}, state, {
            allMessages: [].concat(_toConsumableArray(state.allMessages), [action.nexFormQuestion])
          });

        case 'SEND_FORM_INFO':
          return _objectSpread2({}, state, {
            sendingMessage: action.sendingMessage
          });

        case 'YESNO_MESSAGE':
          return _objectSpread2({}, state, {
            yesNoMessage: action.yesOrNoMessage
          });

        case 'SAVE_FORM_QUESTIONS':
          return _objectSpread2({}, state, {
            saveFormQuestions: [].concat(_toConsumableArray(state.saveFormQuestions), [action.formQuestion])
          });

        case 'UPDATE_QUESTIONS_MESSAGE':
          var allMessagesLastIndex = state.allMessages.indexOf(state.allMessages[state.allMessages.length - 1]);
          return update(state, {
            allMessages: _defineProperty({}, allMessagesLastIndex, {
              message: {
                $set: action.message
              }
            }),
            count: {
              $set: state.count + 1
            }
          });

        case 'SAVE_USERNAME':
          return _objectSpread2({}, state, {
            username: action.getUsername
          });

        case 'UPDATE_COUNT_IN_NEXT_QUES':
          return update(state, {
            count: {
              $set: action.comingCount + 2
            }
          });

        default:
          return state;
      }
    });

    return _this;
  } // eslint-disable-next-line react/prop-types


  _createClass(ProviderComponent, [{
    key: "render",
    value: function render() {
      var store = redux.createStore(this.reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
      return React__default.createElement("div", null, React__default.createElement(reactRedux.Provider, {
        store: store
      }, React__default.createElement(App, null)));
    }
  }]);

  return ProviderComponent;
}(React.Component);

var initialState = {
  formId: '92112257961961',
  apiKey: '7fcefff03d226f77300b4f82a5311166',
  allMessages: [],
  saveFormQuestions: [],
  count: 0,
  username: '',
  yesNoMessage: '',
  sendingMessage: ''
};
/*
"main": "./lib/cjs/index.js",
  "module":"./lib/esm/index.js",
  */
// ***scripts */
// "build": "rollup -c rollup.config.js",
//     "prepublishOnly": "npm run build"

var JotChat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JotChat, _React$Component);

  function JotChat() {
    _classCallCheck(this, JotChat);

    return _possibleConstructorReturn(this, _getPrototypeOf(JotChat).apply(this, arguments));
  }

  _createClass(JotChat, [{
    key: "render",
    value: function render() {
      return React__default.createElement(ProviderComponent, {
        initialState: initialState
      });
    }
  }]);

  return JotChat;
}(React__default.Component);
// ReactDOM.render(
//   <ProviderComponent initialState={initialState} />
//   , document.getElementById('root')
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register(); //

module.exports = JotChat;
//# sourceMappingURL=index.js.map
