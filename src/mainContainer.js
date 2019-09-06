/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable radix */
/* eslint-disable complexity */
/* eslint-disable max-statements */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable import/first */
import React, { Component } from 'react';
import TypeMessage from './typeMessage';
import { OutgoingMessages } from './outgoingMessages';
import { IncomingMessages } from './incomingMessages';
import { connect } from 'react-redux';
import { YesNoMessages } from './yesNoMessages';
import SendFormContainer from './sendFormContainer';

var tempDate = new Date();
var getHour = '';
if (Number(tempDate.getHours()) >= 13) {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' PM';
} else {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' AM';
}
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.heightRef = React.createRef();
    this.nextQuestion = this.nextQuestion.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

// Next Question is shown in the screen
updateCount=() => {
  return this.props.dispatch({ type: 'UPDATE_COUNT_IN_NEXT_QUES', comingCount: this.props.count });
}
saveMessageDispatch=() => {
  return this.props.dispatch({ type: 'SAVE_MESSAGE', nexFormQuestion: this.props.saveFormQuestions[this.props.count] });
}
writeYes=(message) => {
  // eslint-disable-next-line prefer-const
  let contentMessage = message.content;
  return this.props.dispatch({ type: 'YESNO_MESSAGE', yesOrNoMessage: contentMessage });
}

async nextQuestion(message) {
  await this.writeYes(message);
  await this.updateCount();
  await this.saveMessageDispatch();
}
// Next Question is shown in the screen

scrollToBottom=() => {
  this.heightRef.current.scrollTop = this.heightRef.current.scrollHeight;
}


// Text added to question's message properties
updateQuestionMessage=(message) => {
  const contentMessage = message.content;
  console.log('message in updateQuestionMessage', contentMessage);
  return this.props.dispatch({ type: 'UPDATE_QUESTIONS_MESSAGE', message: contentMessage });
}

saveMessageOfAddMessage=() => {
  return this.props.dispatch({ type: 'SAVE_MESSAGE', nexFormQuestion: this.props.saveFormQuestions[this.props.count] });
}

async addMessage(message) {
  console.log('message in addMessage Func', message);
  //     //Firstly message is added into related question field's message field
  await this.updateQuestionMessage(message);
  if (this.props.count < this.props.saveFormQuestions.length) {
    await this.saveMessageOfAddMessage();
  } else {
    console.log('soru bitti');
  }

  // Next question is added into allMessages redux store
  this.scrollToBottom();
}
// Text added to question's message properties

sendForm=() => {
  var submitMessage = {};
  for (var i = 0; i < this.props.allMessages.length; i++) {
    if (this.props.allMessages[i].type === 'control_email') {
      const { qid } = this.props.allMessages[i];
      // submissions[qid]=this.props.allMessages[i].message;
      const { message } = this.props.allMessages[i];
      // '3': { first: 'berkay', last: 'test' },
      submitMessage[qid] = message;
    } else if (this.props.allMessages[i].type === 'control_fullname') {
      const { qid } = this.props.allMessages[i];
      const divideFullname = this.props.allMessages[i].message.split(' ');
      submitMessage[qid] = { first: divideFullname[0], last: divideFullname[1] };
    } else if (this.props.allMessages[i].type === 'control_dropdown') {
      const { qid } = this.props.allMessages[i];
      for (var l = 0; l < this.props.saveFormQuestions.length; l++) {
        if (this.props.allMessages[i].order === this.props.saveFormQuestions[l].order) {
          // Divide options according to |
          const divideOptions = this.props.saveFormQuestions[l].options.split('|');
          console.log('gelen divide optionssss', divideOptions, `gelen all Messages option${this.props.allMessages[i].message}`);
          for (var k = 0; k < divideOptions.length; k++) {
            if (divideOptions.indexOf(divideOptions[k]) === parseInt(this.props.allMessages[i].message)) {
              console.log(`eşiti yakaladım sen ${divideOptions[k]}seçmişsin`, `allmessages message${this.props.allMessages[i].message}`);
              // send selected options into submitMessage to send jotform
              submitMessage[qid] = divideOptions[k];
            } else {
              console.log(`eşiti yakalayamadım${this.props.allMessages[i].message}`);
            }
          }
        }
      }
    } else if (this.props.allMessages[i].type === 'control_radio') {
      const { qid } = this.props.allMessages[i];
      for (var m = 0; m < this.props.saveFormQuestions.length; m++) {
        if (this.props.allMessages[i].order === this.props.saveFormQuestions[m].order) {
          // Divide options according to |
          const divideOptions = this.props.saveFormQuestions[m].options.split('|');
          console.log('gelen divide optionssss', divideOptions, `gelen all Messages option${this.props.allMessages[i].message}`);
          for (var n = 0; n < divideOptions.length; n++) {
            if (divideOptions.indexOf(divideOptions[n]) === parseInt(this.props.allMessages[i].message)) {
              console.log(`eşiti yakaladım sen ${divideOptions[n]}seçmişsin`, `allmessages message${this.props.allMessages[i].message}`);
              // send selected options into submitMessage to send jotform
              submitMessage[qid] = divideOptions[n];
            } else {
              console.log(`eşiti yakalayamadım${this.props.allMessages[i].message}`);
            }
          }
        }
      }
    } else if (this.props.allMessages[i].type === 'control_textarea') {
      const { qid } = this.props.allMessages[i];

      const { message } = this.props.allMessages[i];
      submitMessage[qid] = message;
    } else if (this.props.allMessages[i].type === 'control_datetime') {
      const { qid } = this.props.allMessages[i];

      // Divide datetime according to -
      const divideOptions = this.props.allMessages[i].message.split('-');

      // send selected options into submitMessage to send jotform
      submitMessage[qid] = { month: divideOptions[0], day: divideOptions[1], year: divideOptions[2] };
    } else if (this.props.allMessages[i].type === 'control_checkbox') {
      const { qid } = this.props.allMessages[i];
      // Divide datetime according to -
      const divideMessageOptions = this.props.allMessages[i].message.split(',');
      const sendCheckBoxArray = [];

      for (var y = 0; y < this.props.saveFormQuestions.length; y++) {
        if (this.props.allMessages[i].order === this.props.saveFormQuestions[y].order) {
          // Divide options according to |
          const divideOptions = this.props.saveFormQuestions[y].options.split('|');
          console.log('gelen multiple Checkbox options', divideOptions, `gelen all Messages option${this.props.allMessages[i].message}`);
          for (var z = 0; z < divideOptions.length; z++) {
            for (var t = 0; t < divideOptions.length; t++) {
              if (divideOptions.indexOf(divideOptions[z]) === parseInt(divideMessageOptions[t])) {
                sendCheckBoxArray.push(divideOptions[z]);
                console.log(`eşleşen multiple checkboxlar${divideOptions[z]}`);
              } else {
                console.log('multiple checkbox eşleşmedi');
              }
            }
            submitMessage[qid] = sendCheckBoxArray;
          }
        }
      }
    }
  }
  const xhr = new XMLHttpRequest();
  console.log(submitMessage);
  xhr.open('POST', `https://api.jotform.com/form/${this.props.formId}/submissions?apiKey=${this.props.apiKey}`);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(JSON.stringify(submitMessage));
}


render() {
  return (
    <div className="mainContainer">
      <h3 className="text-center">Jotform ChatBot</h3>
      <div className="messaging" >
        <div className="inbox_msg" >
          <div className="mesgs" >
            <div className="msg_history" ref={this.heightRef}>
              <div className="outgoing_msg">
                <div className="outgoing_msg_img">
                  <img src="jot_pencil.png" alt="pencil" />
                </div>
                <div className="sent_msg">
                  <p>
                    <span className="outgoing_msg_question">Hello {this.props.username.toUpperCase()}. Welcome to JotForm Chatbot</span>
                  </p>
                  <span className="time_date"> {getHour}</span>
                </div>
              </div>
              <div className="outgoing_msg">
                <div className="outgoing_msg_img">
                  <img src="jot_pencil.png" alt="pencil" />
                </div>
                <div className="sent_msg">
                  <p>
                    <span className="outgoing_msg_question">Would you like to fullfill the form?  YES OR NO ?</span>

                  </p>
                  <span className="time_date"> {getHour}</span>
                </div>
              </div>
              {/* outgoing messages */
                <YesNoMessages messages={this.props.yesNoMessage} />
                }
              {

                this.props.allMessages.map((item) => {
                  if (this.props.yesNoMessage.toUpperCase() === 'NO') {
                    return '';
                  } else {
                    if (item.message === '') {
                        return <OutgoingMessages question={item} />;
                    } else if (item.message !== '') {
                    return [
                      <OutgoingMessages question={item} />,
                      <IncomingMessages messages={item} />
                        ];
                    }
                        return this.warning();
                  }
                })

              }
              <SendFormContainer sendForm={this.sendForm} />

            </div>

            {/* Type message into text field */ }
            <TypeMessage
              message="sendSomething" warning={this.warning} sendForm={this.sendForm}
              addMessage={this.addMessage}
              nextQuestion={this.nextQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
}
const mapStateToProps = state => ({
  formId: state.formId,
  apiKey: state.apiKey,
  saveFormQuestions: state.saveFormQuestions,
  count: state.count,
  allMessages: state.allMessages,
  username: state.username,
  yesNoMessage: state.yesNoMessage
});
export default connect(mapStateToProps)(MainContainer);
