import React,{Component} from "react";
import TypeMessage from './typeMessage';
import {connect} from "react-redux";

 class MainContent extends Component{
     constructor(props){
         super(props);
         this.state={
             count:2,
             questions:[]
         }
         this.sendForm=this.sendForm.bind(this);
     }

     sendForm=()=>{
         console.log("state",this.state.questions);
         console.log("props",this.props.saveMessage);
         var submissions = {};


         submissions['3'] =JSON.stringify( {first: 'semih',
                                            last:'özden'});


        console.log(submissions);

        window.JF.createFormSubmission(this.props.formId, submissions, function(response){

            console.log(response.URL);
        })

     }

    addMessage=(message)=>{

        console.log( "inputtan gelen message",message);
        message.keyId = Math.random();
        this.props.dispatch({type:"SAVE_MESSAGE",typeMessage:message});
    }


    moreCount=()=>{
        console.log("more count tıklandı");
        var x=this;
        new Promise(function(resolve,reject){
            //count is increased
            setTimeout(
                x.setState(prevState=>({
                    count:prevState.count+1
                }), resolve)
            ,1000);
        }).then(function(result){

            Object.entries(x.props.saveFormQuestions).map(([key, value], i) => {

                if(key===x.state.count.toString()){
                    console.log("key",key);
                    return (
                        x.setState(prevState=>({
                            questions:prevState.questions.concat(value)
                        }))
                    );
                 }
                 return x.state.questions;

            })
        })
    }

    _nextQuestion=()=>{

        //this.props.dispatch({type:"SAVE_MESSAGE",lineQues:message});

        var x=this;
        new Promise(function(resolve,reject){
            //count is increased
            setTimeout(
                x.setState(prevState=>({
                    count:prevState.count+1
                }),resolve)
            ,1000);
        }).then(function(result){

            Object.entries(x.props.saveFormQuestions).map(([key, value], i) => {

                if(key===x.state.count.toString() && (value.type==="control_fullname" || value.type==="control_email" || value.type==="control_textarea")){
                    return (
                        x.setState(prevState=>({
                            questions:prevState.questions.concat(value)
                        }))
                    );
                 }
                 return x.state.questions;

            })
        })
    }



render(){
    let sendSomething="Main contentten type message'e mesaj gönderildi";
    return(
        <div className="mainContainer">
            <h3 className="text-center">Jotform ChatBot</h3>
        <div className="messaging">
            <div className="inbox_msg">

                <div className="mesgs">
                    {
                        //////////MESSAGE FIELD////////////////*\
                    }

                    <div className="msg_history">
                        <div className="outgoing_msg">
                        <div className="outgoing_msg_img"> <img src="jot_pencil.png"
                                    alt="pencil"/>
                            </div>
                            <div className="sent_msg">
                                <p>
                                    How Can I help you? Would you like to fullfill the form?
                                    <input type="button"value="Yes" onClick={this._nextQuestion}/>
                                    <input type="button"value="No"/>
                                    </p>
                                <span className="time_date"> 11:01 AM | June 9</span>
                            </div>
                        </div>
                        {

                            this.state.questions.map(item=>{

                                if(item.type==='control_fullname'){
                                    return(
                                        <div className="incoming_msg" key={item.qid}>
                                            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                    alt="sunil"/>
                                            </div>
                                            <div className="received_msg">
                                                <div className="received_withd_msg">
                                                    <p>What is your name and surname? Please write with space between your name and surname!{item.type}</p>
                                                    <p>

                                                    </p>
                                                    <span className="time_date"> 11:01 AM | June 9</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}else if(item.type==='control_email'){
                                        return(
                                            <div className="incoming_msg" key={item.qid}>
                                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                        alt="sunil"/>
                                                </div>
                                                <div className="received_msg">
                                                    <div className="received_withd_msg">
                                                        <p>What is your e-mail? {item.type}</p>
                                                        <p>

                                                        </p>
                                                        <span className="time_date"> 11:01 AM | June 9</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }else if(item.type==='control_textarea'){
                                        return(
                                            <div className="incoming_msg" key={item.qid}>
                                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                        alt="sunil"/>
                                                </div>
                                                <div className="received_msg">
                                                    <div className="received_withd_msg">
                                                        <p>{item.text},{item.type}</p>
                                                        <p>

                                                        </p>
                                                        <span className="time_date"> 11:01 AM | June 9</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }else{
                                        return(<div style={{display:'none'}}>We dont find any questions in your form</div>);
                                    }


                            })
                        }

                        {
                            //User sent messages

                            this.props.saveMessage.map(message=>{
                                return (
                                <div className="incoming_msg" key={message.keyId}>
                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                        alt="sunil" />
                                </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                    <p>Your answer.</p>
                                        <p>
                                            {message.content}
                                        </p>
                                        <span className="time_date"> 11:04 AM | June 9</span>
                                    </div>
                                </div>
                            </div>);
                            })
                        }
                        <div className="sendForm">
                            <input type="button" value="Send Form" onClick={this.sendForm} />
                        </div>
                    </div>

                    <TypeMessage message={sendSomething} addMessage={this.addMessage} moreCount={this.moreCount}/>

                    {
                        //////////MESSAGE FIELD////////////////*\
                    }
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

export default connect(mapStateToProps)(MainContent);