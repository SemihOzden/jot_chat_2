/* eslint-disable complexity */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */

/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';


class TypeMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

    handleChange=(event) => {
      this.setState({ content: event.target.value });
    }
    handleSendForm=() => {
      this.props.sendForm();
    }

    // eslint-disable-next-line max-statements
    handleSubmit=(event) => {
      event.preventDefault();
      if (this.props.allMessages.length === 0 && this.state.content !== '' && (this.state.content === 'yes' || this.state.content === 'Yes' || this.state.content === 'YES' || this.state.content === 'no' || this.state.content === 'No' || this.state.content === 'NO')) {
        console.log('tıklandı');
        this.props.nextQuestion(this.state);
        this.setState({ content: '' });
      } else if (this.state.content !== '' && this.props.allMessages.length !== 0) {
        const question = this.props.allMessages[(this.props.allMessages.length) - 1];

        if (question.type === 'control_datetime') {
          const devideDate = this.state.content.split('-');
          if (question.format === 'ddmmyyyy' && devideDate.length > 0 && devideDate.length === 3) {
            if ((Number(devideDate[0]) > 0 && Number(devideDate[0]) <= 31) && (Number(devideDate[1]) > 0 && Number(devideDate[1] <= 12)) && (Number(devideDate[2]) > 1200 && Number(devideDate[2] <= new Date().getUTCFullYear()))) {
              this.props.addMessage(this.state);
              this.setState({ content: '' });
            } else {
              window.alert('Please write appropriate date');
              this.setState({ content: '' });
            }
          } else {
            window.alert('Please wite appropriate date');
            this.setState({ content: '' });
          }
        } else if (question.type === 'control_radio') {
          const radioOption = this.state.content;
          // Check whether it is number or not and it's values contains their index numbers
          const divideOptions = question.options.split('|');
          // eslint-disable-next-line no-restricted-globals
          if (isNaN(Number(radioOption))) {
            // window.alert('Please write only number for option selection.');
            this.setState({ content: '' });
          } else {
            // window.alert('yes it is numerical');
            this.setState({ content: '' });
            divideOptions.map((item) => {
              if (Number(radioOption) === divideOptions.indexOf(item)) {
                this.props.addMessage(this.state);
                return ('Yes you enterered appropriate number');
              // eslint-disable-next-line no-else-return
              } else {
                // add this.props.addWarningMessage() props here to send alert to main field in main Container component
                // window.alert('Please enter appropriate option');
                return ('Please write only appropriate option number');
              }
            });
          }
        } else if (question.type === 'control_dropdown') {
          const radioOption = this.state.content;
          // Check whether it is number or not and it's values contains their index numbers
          const divideOptions = question.options.split('|');
          // eslint-disable-next-line no-restricted-globals
          if (isNaN(Number(radioOption))) {
            // window.alert('Please write only number for option selection.');
            this.setState({ content: '' });
          } else {
            window.alert('yes it is numerical');
            this.setState({ content: '' });
            divideOptions.map((item) => {
              if (Number(radioOption) === divideOptions.indexOf(item)) {
                this.props.addMessage(this.state);
                return ('Yes you enterered appropriate number');
              // eslint-disable-next-line no-else-return
              } else {
                // add this.props.addWarningMessage() props here to send alert to main field in main Container component
                // window.alert('Please enter appropriate option');
                return ('Please write only appropriate option number');
              }
            });
          }
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
            // window.alert('Email is not valid');
            this.setState({ content: '' });
          }
        } else if (question.type === 'control_checkbox') {
          const radioOption = this.state.content;
          const divideOptions = question.options.split('|');


          // If there are options more than 1
          if (radioOption.length > 1) {
            window.alert('birden fazla değer var');
            if (radioOption.search(',') !== -1) {
              var saveMultipleOptions = { content: '' };
              var saveMultipleOpt = saveMultipleOptions;
              const divideRadioOption = radioOption.split(',');
              window.alert('-1 yes Only comma used');
              this.setState({ content: '' });
              for (var i = 0; i < divideOptions.length; i++) {
                console.log('ilk', divideOptions.indexOf(divideOptions[i]));
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
                console.log('saveMultiple Options', saveMultipleOpt);
              }
              console.log(saveMultipleOpt);
              this.props.addMessage(saveMultipleOpt);
            } else {
              window.alert('-5 Please use only comma (,) to devide options');
            }
          } else {
            // If there is only 1 option
            window.alert('-6 bir değer var');

            divideOptions.map((item) => {
              if (Number(radioOption) === divideOptions.indexOf(item)) {
                this.props.addMessage(this.state);
                return ('-7 Yes you enterered appropriate number');
              // eslint-disable-next-line no-else-return
              } else {
                window.alert('-8 Please enter appropriate option');
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
      if (this.props.saveFormQuestions.length === this.props.count) {
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
      } else {
        return (
          <div className="type_msg">
            <div className="input_msg_write">
              <input
                type="text" className="write_msg" value={this.state.content}
                onChange={this.handleChange} placeholder={this.props.message}
              />
              <button
                className="msg_send_btn" onClick={this.handleSubmit}
                type="button"
              >
                <i className="fa fa-paper-plane-o" aria-hidden="true" />
              </button>
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
  allMessages: state.allMessages
});

export default connect(mapStateToProps)(TypeMessage);
