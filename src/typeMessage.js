/* eslint-disable complexity */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */

/* eslint-disable no-console */
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { WarningMessages } from './warningMessages';

var warnNowMessage = '';

class TypeMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      warningMessage: null
    };
    this.handleSendForm = this.handleSendForm.bind(this);
  }


    warningMessageAnimation= (getWarningMessage) => {
      this.setState({ warningMessage: getWarningMessage });
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.setState({ warningMessage: null });
      }, 2500);
    }

    handleChange=(event) => {
      this.setState({ content: event.target.value });
    }
    async handleSendForm() {
      await this.props.sendForm();
      await this.props.sendFormInfo();
      this.setState({ content: '' });
    }
    handleKeyPress = (e) => {
      if (e.keyCode === 13) {
        this.handleSubmit(e);
      }
    }

    // eslint-disable-next-line max-statements
    handleSubmit=(event) => {
      event.preventDefault();
      if (this.props.allMessages.length === 0 && this.state.content !== '' && (this.state.content === 'yes' || this.state.content === 'Yes' || this.state.content === 'YES' || this.state.content === 'no' || this.state.content === 'No' || this.state.content === 'NO')) {
        this.props.nextQuestion(this.state);
        this.setState({ content: '' });
      } else if (this.state.content !== '' && this.props.allMessages.length !== 0) {
        const question = this.props.allMessages[(this.props.allMessages.length) - 1];

        if (question.type === 'control_datetime') {
          const devideDate = this.state.content.split('-');
          if (question.format === 'ddmmyyyy' && devideDate.length > 0 && devideDate.length === 3) {
            if ((Number(devideDate[0]) > 0 && Number(devideDate[0]) <= 31) && (Number(devideDate[1]) > 0 && Number(devideDate[1] <= 12)) && (Number(devideDate[2]) > 1200 && Number(devideDate[2] <= new Date().getUTCFullYear()))) {
              this.props.addMessage(this.state);
              warnNowMessage = '';
              this.setState({ content: '' });
            } else {
              warnNowMessage = 'Please write appropriate date';
              this.setState({ content: '' });
            }
          } else {
            warnNowMessage = 'Please write appropriate date';
            this.setState({ content: '' });
          }
          if (warnNowMessage !== '') {
            this.warningMessageAnimation(warnNowMessage);
          }
        } else if (question.type === 'control_radio') {
          const radioOption = this.state.content;
          // Check whether it is number or not and it's values contains their index numbers
          const divideOptions = question.options.split('|');
          // eslint-disable-next-line no-restricted-globals
          if (isNaN(Number(radioOption))) {
            this.warningMessageAnimation('Please write only number for option selection.');
            this.setState({ content: '' });
          } else {
            this.setState({ content: '' });
            const result = divideOptions.filter(divideOption => Number(radioOption) === divideOptions.indexOf(divideOption));
            if (result.length > 0) {
              this.props.addMessage(this.state);
            } else {
              this.warningMessageAnimation('Please write only appropriate option number');
            }
          }
        } else if (question.type === 'control_dropdown') {
          const radioOption = this.state.content;
          // Check whether it is number or not and it's values contains their index numbers
          const divideOptions = question.options.split('|');
          // eslint-disable-next-line no-restricted-globals
          if (isNaN(Number(radioOption))) {
            this.warningMessageAnimation('Please write only number for option selection.');
            this.setState({ content: '' });
          } else {
            this.setState({ content: '' });
            const result = divideOptions.filter(divideOption => Number(radioOption) === divideOptions.indexOf(divideOption));
            if (result.length > 0) {
              this.props.addMessage(this.state);
            } else {
              this.warningMessageAnimation('Please write only appropriate option number');
            }
          }
          // if (warnNowMessage !== '') {
          //   this.warningMessageAnimation(warnNowMessage);
          // }
        } else if (question.type === 'control_email') {
          const radioOption = this.state.content;
          // eslint-disable-next-line no-inner-declarations
          function validateEmail(radioOptions) {
            // eslint-disable-next-line no-useless-escape
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(radioOptions);
          }
          if (validateEmail(radioOption)) {
            this.props.addMessage(this.state);
            this.setState({ content: '' });
          } else {
            this.setState({ content: '' });
            this.warningMessageAnimation('Please write appropriate email');
          }
        } else if (question.type === 'control_checkbox') {
          const radioOption = this.state.content;
          const divideOptions = question.options.split('|');


          // If there are options more than 1
          if (radioOption.length > 1) {
            if (radioOption.search(',') !== -1) {
              var saveMultipleOptions = { content: '' };
              var saveMultipleOpt = saveMultipleOptions;
              const divideRadioOption = radioOption.split(',');
              this.setState({ content: '' });
              for (var i = 0; i < divideOptions.length; i++) {
                for (var k = 0; k < divideRadioOption.length; k++) {
                  if (Number(divideRadioOption[k]) === divideOptions.indexOf(divideOptions[i])) {
                    if (i === divideOptions.length - 1) {
                      saveMultipleOpt.content = `${saveMultipleOpt.content + divideOptions.indexOf(divideOptions[i])}`;
                    } else {
                      saveMultipleOpt.content = `${saveMultipleOpt.content + divideOptions.indexOf(divideOptions[i])},`;
                    }
                  } else {
                    // window.alert('Only related numbers can be added be careful');
                    continue;
                  }
                }
              }
              this.props.addMessage(saveMultipleOpt);
            } else {
              this.warningMessageAnimation('Please use only comma (,) to devide options');
            }
          } else {
            // If there is only 1 option
            divideOptions.map((item) => {
              if (Number(radioOption) === divideOptions.indexOf(item)) {
                this.props.addMessage(this.state);
                return ('-7 Yes you enterered appropriate number');
              // eslint-disable-next-line no-else-return
              } else {
                this.warningMessageAnimation('Please enter appropraite option');
                return ('Please write only appropriate option number');
              }
            });
          }
        } else {
          this.props.addMessage(this.state);
          this.setState({ content: '' });
        }
      }
    }

    render() {
      if (this.props.saveFormQuestions.length === this.props.count && this.props.sendingMessage === '') {
        return (
          <div className="type_msg">
            <div className="input_msg_write">
              <input
                type="text" disabled
                placeholder={this.props.message}
              />
              <div className="sendForm">
                <input
                  type="button" className="sendFormBtn" value="Send Form"
                  onClick={this.handleSendForm}
                />
              </div>
            </div>
          </div>
        );
      // eslint-disable-next-line no-else-return
      } else if (this.props.saveFormQuestions.length === this.props.count && this.props.sendingMessage !== '') {
        return (
          <div className="type_msg">
            <div className="input_msg_write">
              <input
                type="text" disabled
                placeholder={this.props.message}
              />
              <div className="sendForm">
                <input
                  type="button" className="sendFormBtn" value="Send Form"
                />
              </div>
            </div>
          </div>
        );
      // eslint-disable-next-line no-else-return
      } else {
        return (
          <div>
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnter={3000}
              transitionLeave={3000}
            >
              <WarningMessages sendWarningMessage={this.state.warningMessage} />
            </ReactCSSTransitionGroup>
            <div className="type_msg">
              <div className="input_msg_write">
                <input
                  type="text" className="write_msg" value={this.state.content}
                  onChange={this.handleChange} placeholder={this.props.message}
                  onKeyDown={this.handleKeyPress}
                />
                <button
                  className="msg_send_btn" onClick={this.handleSubmit}
                  type="button"
                >
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        );
      }
    }
}
const mapStateToProps = state => ({
  formId: state.formId,
  apiKey: state.apiKey,
  saveFormQuestions: state.saveFormQuestions,
  count: state.count,
  allMessages: state.allMessages,
  sendingMessage: state.sendingMessage
});

export default connect(mapStateToProps)(TypeMessage);
