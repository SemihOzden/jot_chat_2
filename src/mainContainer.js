import React,{Component} from "react";
import TypeMessage from './typeMessage';
import {OutgoingMessages} from './outgoingMessages';
import {IncomingMessages} from './incomingMessages';
import {connect} from "react-redux";
import {WarningMessages} from './warningMessages';


class MainContainer extends Component{
constructor(props){
    super(props);
    this.heightRef=React.createRef()
    this.nextQuestion=this.nextQuestion.bind(this);
    this.addMessage=this.addMessage.bind(this);
}

//Next Question is shown in the screen
updateCount=()=>{
    return this.props.dispatch({type:"UPDATE_COUNT_IN_NEXT_QUES",comingCount:this.props.count});
}
saveMessageDispatch=()=>{
    return this.props.dispatch({type:"SAVE_MESSAGE",nexFormQuestion:this.props.saveFormQuestions[this.props.count]})
}

async nextQuestion(){

    await this.updateCount();
    await this.saveMessageDispatch();
}
//Next Question is shown in the screen

scrollToBottom=()=>{
    this.heightRef.current.scrollTop = this.heightRef.current.scrollHeight;

}


//Text added to question's message properties
updateQuestionMessage=(message)=>{
    let contentMessage=message.content;
    console.log("message in updateQuestionMessage",contentMessage);
    return this.props.dispatch({type:"UPDATE_QUESTIONS_MESSAGE",message:contentMessage});
}

saveMessageOfAddMessage=()=>{
    return this.props.dispatch({type:"SAVE_MESSAGE",nexFormQuestion:this.props.saveFormQuestions[this.props.count]});
}

async addMessage(message){
    console.log("message in addMessage Func",message);
//     //Firstly message is added into related question field's message field
        await this.updateQuestionMessage(message);
        await this.saveMessageOfAddMessage();
        //Next question is added into allMessages redux store
        this.scrollToBottom();
}
//Text added to question's message properties

warning=(warningMessage)=>{
    let renderWarningElements=[];
    renderWarningElements.push(<WarningMessages warnMessage={warningMessage}/>);
    return renderWarningElements;
}

sendForm=()=>{
    var submitMessage = {}
        for(var i=0;i<this.props.allMessages.length;i++){

            if(this.props.allMessages[i].type==='control_email'){
                let qid=this.props.allMessages[i].qid;
                //submissions[qid]=this.props.allMessages[i].message;
                let message=this.props.allMessages[i].message;
                //'3': { first: 'berkay', last: 'test' },

                submitMessage[qid] = message;
                // send it out



            }else if(this.props.allMessages[i].type==="control_fullname"){
                 let qid=this.props.allMessages[i].qid;
                let divideFullname=this.props.allMessages[i].message.split(" ");

                submitMessage[qid] ={first:divideFullname[0],last:divideFullname[1]};
            }
        }
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.jotform.com/form/"+this.props.formId+"/submissions?apiKey="+this.props.apiKey+"");
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(JSON.stringify(submitMessage));

}


render(){
    return(
        <div className="mainContainer">
            <h3 className="text-center">Jotform ChatBot</h3>
        <div className="messaging" >
            <div className="inbox_msg" >
                <div className="mesgs" >
                    <div className="msg_history" ref={this.heightRef}>
                    <div className="outgoing_msg">
                            <div className="outgoing_msg_img">
                                <img src="jot_pencil.png" alt="pencil"/>
                            </div>
                                <div className="sent_msg">
                                    <p>
                                        Hello {this.props.username.toUpperCase()}. Welcome to Jorform Chatbot
                                        </p>
                                    <span className="time_date"> 11:01 AM | June 9</span>
                                </div>
                        </div>
                        <div className="outgoing_msg">
                            <div className="outgoing_msg_img">
                                <img src="jot_pencil.png" alt="pencil"/>
                            </div>
                                <div className="sent_msg">
                                    <p>
                                        Would you like to fullfill the form?  YES OR NO ?

                                        {/* <input type="button"value="Yes" onClick={this.nextQuestion}/>
                                        <input type="button"value="No"/> */}
                                        </p>
                                    <span className="time_date"> 11:01 AM | June 9</span>
                                </div>
                        </div>
                        {/*outgoing messages*/


                            this.props.allMessages.map(item=>{
                                if(item.message===''){
                                    return <OutgoingMessages question={item}/>;
                                }else if(item.message!==''){
                                return [
                                    <OutgoingMessages question={item}/>,
                                    <IncomingMessages messages={item}/>
                                    ]
                                }else{
                                    return this.warning();
                                }
                            })

                        }

                        <div className="sendForm" onClick={this.sendForm}>
                            <input type="button" value="Send Form"/>
                        </div>
                    </div>
                    {/* Type message into text field */ }
                    <TypeMessage message={'sendSomething'} warning={this.warning} addMessage={this.addMessage} nextQuestion={this.nextQuestion}/>
                </div>
            </div>
        </div>
        </div>
    );
}
}
const mapStateToProps=state=>({
    formId:state.formId,
    apiKey:state.apiKey,
    saveFormQuestions:state.saveFormQuestions,
    count:state.count,
    allMessages:state.allMessages,
    username:state.username
})
export default connect(mapStateToProps)(MainContainer);