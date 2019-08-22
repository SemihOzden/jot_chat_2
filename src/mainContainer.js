import React,{Component} from "react";
import TypeMessage from './typeMessage';
import {OutgoingMessages} from './outgoingMessages';
import {IncomingMessages} from './incomingMessages';
import {connect} from "react-redux";

const comingMessages={
    incoming:<IncomingMessages/>,
    outgoing:<OutgoingMessages/>
}
class MainContainer extends Component{

addMessage=(message)=>{
    message.keyId = Math.random();
    this.props.dispatch({type:"SAVE_MESSAGE",typeMessage:message});

}

render(){
    return(
        <div className="mainContainer">
            <h3 className="text-center">Jotform ChatBot</h3>
        <div className="messaging">
            <div className="inbox_msg">
                <div className="mesgs">
                    <div className="msg_history">
                        {
                        //outgoing messages
                        }
                        {
                            this.props.saveFormQuestions.map(item =>{
                                if(item.message===''){
                                   return <OutgoingMessages question={item.type}/>;
                                }else{
                                    return [
                                    <OutgoingMessages question={item.type}/>,
                                    <IncomingMessages messages={item.message}/>
                                    ]


                                }
                            })

                        }



                        {//incoming messages
                        }
                        <IncomingMessages/>


                        <div className="sendForm">
                            <input type="button" value="Send Form"/>
                        </div>
                    </div>
                    {
                        // Type message into text field
                    }
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