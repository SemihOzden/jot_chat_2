import React, { Component } from 'react';
import 'core-js/modules/es.array.concat';
import 'core-js/modules/es.array.index-of';
import 'core-js/modules/es.array.map';
import 'core-js/modules/es.parse-int';
import 'core-js/modules/es.regexp.exec';
import 'core-js/modules/es.string.split';
import 'regenerator-runtime/runtime';
import { connect, Provider } from 'react-redux';
import 'core-js/modules/es.object.entries';
import { createStore } from 'redux';
import update from 'immutability-helper';

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

var TypeMessage =
/*#__PURE__*/
function (_Component) {
  _inherits(TypeMessage, _Component);

  function TypeMessage(props) {
    var _this;

    _classCallCheck(this, TypeMessage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TypeMessage).call(this, props));

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
        _this.props.addMessage(_this.state);

        _this.setState({
          content: ''
        });
      }
    });

    _this.state = {
      content: ''
    };
    return _this;
  }

  _createClass(TypeMessage, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "type_msg"
      }, React.createElement("div", {
        className: "input_msg_write"
      }, React.createElement("input", {
        type: "text",
        className: "write_msg",
        value: this.state.content,
        onChange: this.handleChange,
        placeholder: this.props.message
      }), React.createElement("button", {
        className: "msg_send_btn",
        onClick: this.handleSubmit,
        type: "button"
      }, React.createElement("i", {
        className: "fa fa-paper-plane-o",
        "aria-hidden": "true"
      }))));
    }
  }]);

  return TypeMessage;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    formId: state.formId,
    apiKey: state.apiKey,
    saveFormQuestions: state.saveFormQuestions,
    count: state.count,
    allMessages: state.allMessages
  };
};

var TypeMessage$1 = connect(mapStateToProps)(TypeMessage);

var OutgoingMessages = function OutgoingMessages(_ref) {
  var question = _ref.question;

  if (question.type === 'control_datetime') {
    return React.createElement("div", {
      className: "outgoing_msg",
      key: question.order
    }, React.createElement("div", {
      className: "outgoing_msg_img"
    }, React.createElement("img", {
      src: "jot_pencil.png",
      alt: "pencil"
    })), React.createElement("div", {
      className: "sent_msg"
    }, React.createElement("p", null, "".concat(question.text, " Format: ").concat(question.format)), React.createElement("span", {
      className: "time_date"
    }, " 11:01 AM | June 9")));
  } else if (question.type === 'control_dropdown') {
    var divideOptions = question.options.split('|');
    return React.createElement("div", {
      className: "outgoing_msg",
      key: question.order
    }, React.createElement("div", {
      className: "outgoing_msg_img"
    }, React.createElement("img", {
      src: "jot_pencil.png",
      alt: "pencil"
    })), React.createElement("div", {
      className: "sent_msg"
    }, React.createElement("p", {
      key: question.order
    }, question.text, React.createElement("br", null), divideOptions.map(function (item) {
      return React.createElement("p", {
        className: "options_P",
        key: item
      }, "Type ", divideOptions.indexOf(item), " for: ", item);
    })), React.createElement("span", {
      className: "time_date"
    }, " 11:01 AM | June 9")));
  } else if (question.type === 'control_radio') {
    var _divideOptions = question.options.split('|');

    return React.createElement("div", {
      className: "outgoing_msg",
      key: question.order
    }, React.createElement("div", {
      className: "outgoing_msg_img"
    }, React.createElement("img", {
      src: "jot_pencil.png",
      alt: "pencil"
    })), React.createElement("div", {
      className: "sent_msg"
    }, React.createElement("p", {
      key: question.order
    }, question.text, React.createElement("br", null), _divideOptions.map(function (item) {
      return React.createElement("p", {
        className: "options_P",
        key: item
      }, "Type ", _divideOptions.indexOf(item), " for: ", item);
    })), React.createElement("span", {
      className: "time_date"
    }, " 11:01 AM | June 9")));
  } else if (question.type === 'control_checkbox') {
    var _divideOptions2 = question.options.split('|');

    return React.createElement("div", {
      className: "outgoing_msg",
      key: question.order
    }, React.createElement("div", {
      className: "outgoing_msg_img"
    }, React.createElement("img", {
      src: "jot_pencil.png",
      alt: "pencil"
    })), React.createElement("div", {
      className: "sent_msg"
    }, React.createElement("p", {
      key: question.order
    }, question.text, React.createElement("br", null), _divideOptions2.map(function (item) {
      return React.createElement("p", {
        className: "options_P",
        key: item
      }, "Type ", _divideOptions2.indexOf(item), " for: ", item);
    })), React.createElement("span", {
      className: "time_date"
    }, " 11:01 AM | June 9")));
  }

  return React.createElement("div", {
    className: "outgoing_msg",
    key: question.order
  }, React.createElement("div", {
    className: "outgoing_msg_img"
  }, React.createElement("img", {
    src: "jot_pencil.png",
    alt: "pencil"
  })), React.createElement("div", {
    className: "sent_msg"
  }, React.createElement("p", null, question.text), React.createElement("span", {
    className: "time_date"
  }, " 11:01 AM | June 9")));
};

var IncomingMessages = function IncomingMessages(_ref) {
  var messages = _ref.messages;
  return React.createElement("div", {
    className: "incoming_msg",
    key: messages.order
  }, React.createElement("div", {
    className: "incoming_msg_img"
  }, " ", React.createElement("img", {
    src: "userSend.png",
    alt: "sunil"
  })), React.createElement("div", {
    className: "received_msg"
  }, React.createElement("div", {
    className: "received_withd_msg"
  }, React.createElement("p", null, messages.message), React.createElement("span", {
    className: "time_date"
  }, " 11:01 AM | June 9"))));
};

/* eslint-disable no-else-return */

var YesNoMessages = function YesNoMessages(_ref) {
  var messages = _ref.messages;

  if (messages.toUpperCase() === 'YES') {
    return React.createElement("div", {
      className: "incoming_msg"
    }, React.createElement("div", {
      className: "incoming_msg_img"
    }, " ", React.createElement("img", {
      src: "userSend.png",
      alt: "sunil"
    })), React.createElement("div", {
      className: "received_msg"
    }, React.createElement("div", {
      className: "received_withd_msg"
    }, React.createElement("p", null, messages), React.createElement("span", {
      className: "time_date"
    }, " 11:01 AM | June 9"))));
  } else if (messages.toUpperCase() === 'NO') {
    return React.createElement("div", null, React.createElement("div", {
      className: "incoming_msg"
    }, React.createElement("div", {
      className: "incoming_msg_img"
    }, " ", React.createElement("img", {
      src: "userSend.png",
      alt: "sunil"
    })), React.createElement("div", {
      className: "received_msg"
    }, React.createElement("div", {
      className: "received_withd_msg"
    }, React.createElement("p", null, messages), React.createElement("span", {
      className: "time_date"
    }, " 11:01 AM | June 9")))), React.createElement("div", {
      className: "outgoing_msg"
    }, React.createElement("div", {
      className: "outgoing_msg_img"
    }, React.createElement("img", {
      src: "jot_pencil.png",
      alt: "pencil"
    })), React.createElement("div", {
      className: "sent_msg"
    }, React.createElement("p", null, "Thank you for your answer. Please refresh the page to fullfill the form."), React.createElement("span", {
      className: "time_date"
    }, " 11:01 AM | June 9"))));
  } else {
    return '';
  }
};

var SendFormContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(SendFormContainer, _Component);

  function SendFormContainer(props) {
    var _this;

    _classCallCheck(this, SendFormContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SendFormContainer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSendForm", function () {
      _this.props.sendForm();
    });

    return _this;
  }

  _createClass(SendFormContainer, [{
    key: "render",
    value: function render() {
      if (this.props.saveFormQuestions.length === this.props.count) {
        return React.createElement("div", {
          className: "sendForm"
        }, React.createElement("input", {
          type: "button",
          value: "Send Form",
          onClick: this.handleSendForm
        }));
      }

      return '';
    }
  }]);

  return SendFormContainer;
}(Component);

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

var SendFormContainer$1 = connect(mapStateToProps$1)(SendFormContainer);

var MainContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(MainContainer, _Component);

  function MainContainer(props) {
    var _this;

    _classCallCheck(this, MainContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainContainer).call(this, props));

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
    });

    _this.heightRef = React.createRef();
    _this.nextQuestion = _this.nextQuestion.bind(_assertThisInitialized(_this));
    _this.addMessage = _this.addMessage.bind(_assertThisInitialized(_this));
    return _this;
  } // Next Question is shown in the screen


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

      return React.createElement("div", {
        className: "mainContainer"
      }, React.createElement("h3", {
        className: "text-center"
      }, "Jotform ChatBot"), React.createElement("div", {
        className: "messaging"
      }, React.createElement("div", {
        className: "inbox_msg"
      }, React.createElement("div", {
        className: "mesgs"
      }, React.createElement("div", {
        className: "msg_history",
        ref: this.heightRef
      }, React.createElement("div", {
        className: "outgoing_msg"
      }, React.createElement("div", {
        className: "outgoing_msg_img"
      }, React.createElement("img", {
        src: "jot_pencil.png",
        alt: "pencil"
      })), React.createElement("div", {
        className: "sent_msg"
      }, React.createElement("p", null, "Hello ", this.props.username.toUpperCase(), ". Welcome to JotForm Chatbot"), React.createElement("span", {
        className: "time_date"
      }, " 11:01 AM | June 9"))), React.createElement("div", {
        className: "outgoing_msg"
      }, React.createElement("div", {
        className: "outgoing_msg_img"
      }, React.createElement("img", {
        src: "jot_pencil.png",
        alt: "pencil"
      })), React.createElement("div", {
        className: "sent_msg"
      }, React.createElement("p", null, "Would you like to fullfill the form?  YES OR NO ?"), React.createElement("span", {
        className: "time_date"
      }, " 11:01 AM | June 9"))),
      /* outgoing messages */
      React.createElement(YesNoMessages, {
        messages: this.props.yesNoMessage
      }), this.props.allMessages.map(function (item) {
        if (_this2.props.yesNoMessage.toUpperCase() === 'NO') {
          return '';
        } else {
          if (item.message === '') {
            return React.createElement(OutgoingMessages, {
              question: item
            });
          } else if (item.message !== '') {
            return [React.createElement(OutgoingMessages, {
              question: item
            }), React.createElement(IncomingMessages, {
              messages: item
            })];
          }

          return _this2.warning();
        }
      }), React.createElement(SendFormContainer$1, {
        sendForm: this.sendForm
      })), React.createElement(TypeMessage$1, {
        message: "sendSomething",
        warning: this.warning,
        addMessage: this.addMessage,
        nextQuestion: this.nextQuestion
      })))));
    }
  }]);

  return MainContainer;
}(Component);

var mapStateToProps$2 = function mapStateToProps(state) {
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

var MainContainer$1 = connect(mapStateToProps$2)(MainContainer);

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
      return React.createElement(MainContainer$1, null);
    }
  }]);

  return MainContent;
}(Component);

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
      return React.createElement("div", {
        className: "initializeForm"
      });
    }
  }]);

  return Login;
}(React.Component);

var mapStateToProps$3 = function mapStateToProps(state) {
  return {
    formId: state.formId,
    apiKey: state.apiKey,
    saveFormQuestions: state.saveFormQuestions
  };
};

var Login$1 = connect(mapStateToProps$3)(Login);

function App() {
  return React.createElement("div", {
    className: "App"
  }, React.createElement(Login$1, null), React.createElement(MainContent, null));
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
      var store = createStore(this.reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
      return React.createElement("div", null, React.createElement(Provider, {
        store: store
      }, React.createElement(App, null)));
    }
  }]);

  return ProviderComponent;
}(Component);

var initialState = {
  formId: '92112257961961',
  apiKey: '7fcefff03d226f77300b4f82a5311166',
  allMessages: [],
  saveFormQuestions: [],
  count: 0,
  username: '',
  yesNoMessage: ''
};

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
      return React.createElement(ProviderComponent, {
        initialState: initialState
      });
    }
  }]);

  return JotChat;
}(React.Component);
//   <ProviderComponent initialState={initialState} />
//   , document.getElementById('root')
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register(); //

export default JotChat;
//# sourceMappingURL=index.js.map
