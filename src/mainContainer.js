import React,{Component} from "react";
import TypeMessage from './typeMessage';
import {OutgoingMessages} from './outgoingMessages';
import {IncomingMessages} from './incomingMessages';
import {connect} from "react-redux";


class MainContainer extends Component{

constructor(props){
    super(props);
    this.state={
        count:0,
        allMessages:[]

    }
}
componentDidUpdate(){
    console.log("after updated state",this.state);
}

nextQuestion=()=>{

    this.setState(prevState => ({
        ...this.state,
        allMessages: [...prevState.allMessages,this.props.saveFormQuestions[this.state.count]]
      }))
}

addMessage=(message)=>{
    // message.keyId = Math.random();
    // this.props.dispatch({type:"SAVE_MESSAGE",typeMessage:message});

    //Firstly message is added into related question field's message field

    let messagesCopy = JSON.parse(JSON.stringify(this.state.allMessages));
   //make changes to message
   messagesCopy[(messagesCopy.length)-1].message = message.content;
   this.setState({
      allMessages:messagesCopy
    })
    this.setState((prevState)=>({
            count:prevState.count+1
        }));
    //count is increaed by 1
    this.setState(prevState => ({
        ...this.state,
        allMessages: [...prevState.allMessages,this.props.saveFormQuestions[this.state.count]]
      }))







}

createRender=()=>{
    let renderDomElements=[];
    var nextQues=this.state.allMessages;
    for(var i=0;i<nextQues.length;i++){
        if(nextQues[i].message===''){
            renderDomElements.push(<OutgoingMessages question={nextQues[i]}/>)
        }else if(nextQues[i].message!==''){
            return [
            <OutgoingMessages question={nextQues[i]}/>,
            <IncomingMessages messages={nextQues[i]}/>
            ]
        }

    }

    console.log("x", this.state.allMessages);
    return renderDomElements;
}


render(){
    return(
        <div className="mainContainer">
            <h3 className="text-center">Jotform ChatBot</h3>
        <div className="messaging">
            <div className="inbox_msg">
                <div className="mesgs">
                    <div className="msg_history">
                        <div className="outgoing_msg">
                            <div className="outgoing_msg_img">
                                <img src="jot_pencil.png" alt="pencil"/>
                            </div>
                                <div className="sent_msg">
                                    <p>
                                        What is your do you want to fullfill the form?

                                        <input type="button"value="Yes" onClick={this.nextQuestion}/>
                                        <input type="button"value="No"/>
                                        </p>
                                    <span className="time_date"> 11:01 AM | June 9</span>
                                </div>
                        </div>
                        {/*outgoing messages*/

                            this.createRender()

                        }

                        <div className="sendForm">
                            <input type="button" value="Send Form"/>
                        </div>
                    </div>
                    {/* Type message into text field */ }
                    <TypeMessage message={'sendSomething'} addMessage={this.addMessage}/>
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
    saveMessage:state.saveMessage,
    saveFormQuestions:state.saveFormQuestions
})
export default connect(mapStateToProps)(MainContainer);