import React,{Component} from "react";
import TypeMessage from './typeMessage';
import {connect} from "react-redux";

 class MainContent extends Component{
     constructor(props){
         super(props);
         this.state={
             count:2,
             questions:[],
             messages:[]
         }

         this.addMessage=this.addMessage.bind(this);
         this.nextQuestion=this.nextQuestion.bind(this);
     }

     sendForm=()=>{
         console.log("state",this.state.messages);

         var submissions = {};
         submissions['3'] =JSON.stringify( {first: 'semih',
                                            last:'özden'});

        console.log(submissions);

        window.JF.createFormSubmission(this.props.formId, submissions, function(response){

            console.log(response.URL);
        })

     }

    async addMessage(message){
        var x=this;
        console.log( "inputtan gelen message",message);
        let promiseSave=new Promise(function(resolve,reject){
            message.keyId = Math.random();
            resolve(x.props.dispatch({type:"SAVE_MESSAGE",typeMessage:message}))
        });
        let promiseStateUpdate=new Promise(function(resolve,reject){
            console.log("save message",x.props.saveMessage);
            console.log("son message",x.state.messages[(x.state.messages.length)-1].message);
            var lastMessage=x.state.messages[(x.state.messages.length)-1].message=message.content;

            resolve(lastMessage);

        });

        let promiseCount=new Promise(function(resolve,reject){
            resolve(x.setState(prevState=>({
                count:prevState.count+1
                }
            )));
        });
        let promiseAddAnswer=new Promise(function(resolve,reject){
            var createNewQues={
                question:Object.entries(x.props.saveFormQuestions)[x.state.count],
                message:''
                }
                console.log("createNewQues object mi?",createNewQues);
                resolve(x.state.messages.push(createNewQues));

        });
        await promiseSave;
        await promiseStateUpdate;
        await promiseCount;
        await promiseAddAnswer;

        console.log("güncel state",x.state.messages);

        return "done";

    }

    async nextQuestion(){

        var x=this;
        let promiseCount=new Promise(function(resolve,reject){
            //count is increased
            x.setState(prevState=>({
            count:prevState.count+1
            }), resolve)
        });
        let promiseQuestionAdd=new Promise(function(resolve,reject){
            var createNewQues={
                question:Object.entries(x.props.saveFormQuestions)[x.state.count],
                message:''
                }
            console.log("createNewQues object mi?",createNewQues);

            x.state.messages.push(createNewQues);
        });

        await promiseCount;
        await promiseQuestionAdd;

        return "done";



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
                                    <input type="button"value="Yes" onClick={this.nextQuestion}/>
                                    <input type="button"value="No"/>
                                    </p>
                                <span className="time_date"> 11:01 AM | June 9</span>
                            </div>
                        </div>
                        {

                            this.state.messages.map(item => {

                                        return Object.entries(item.question).map(([key,value],i)=>{
                                            console.log("renderdaki value type",value.type);
                                            if(value.type==='control_fullname' && item.message!==''){
                                                return(
                                                    <div className="incoming_msg" key={value.qid}>
                                                        <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                                alt="sunil"/>
                                                        </div>
                                                        <div className="received_msg">
                                                            <div className="received_withd_msg">
                                                                <p>What is your name and surname?</p>
                                                                <p>

                                                                </p>
                                                                <span className="time_date"> 11:01 AM | June 9</span>
                                                            </div>
                                                        </div>

                                                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                            alt="sunil" />
                                                    </div>
                                                    <div className="received_msg">
                                                        <div className="received_withd_msg">
                                                        <p>Your answer.</p>
                                                            <p>
                                                                {item.message}
                                                            </p>
                                                            <span className="time_date"> 11:04 AM | June 9</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                )}else if(value.type==='control_fullname' && item.message===''){
                                                    return(
                                                        <div className="incoming_msg" key={value.qid}>
                                                        <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                                alt="sunil"/>
                                                        </div>
                                                        <div className="received_msg">
                                                            <div className="received_withd_msg">
                                                                <p>What is your name and surname?</p>
                                                                <p>

                                                                </p>
                                                                <span className="time_date"> 11:01 AM | June 9</span>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    );
                                                } else if(value.type==='control_email' && item.message!==''){
                                                    return(
                                                        <div className="incoming_msg" key={value.qid}>
                                                            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                                    alt="sunil"/>
                                                            </div>
                                                            <div className="received_msg">
                                                                <div className="received_withd_msg">
                                                                    <p>What is your e-mail?</p>
                                                                    <p>

                                                                    </p>
                                                                    <span className="time_date"> 11:01 AM | June 9</span>
                                                                </div>
                                                            </div>

                                                            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                            alt="sunil" />
                                                            </div>
                                                            <div className="received_msg">
                                                                <div className="received_withd_msg">
                                                                <p>Your answer.</p>
                                                                    <p>
                                                                        {item.message}
                                                                    </p>
                                                                    <span className="time_date"> 11:04 AM | June 9</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}else if(value.type==='control_email' && item.message===''){
                                                        return(
                                                            <div className="incoming_msg" key={value.qid}>
                                                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                                        alt="sunil"/>
                                                                </div>
                                                                <div className="received_msg">
                                                                    <div className="received_withd_msg">
                                                                        <p>What is your e-mail? {value.type}</p>
                                                                        <p>

                                                                        </p>
                                                                        <span className="time_date"> 11:01 AM | June 9</span>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        )}
                                                    return(<div></div>);
                                        });
                            })

                        }

                        <div className="sendForm">
                            <input type="button" value="Send Form" onClick={this.sendForm} />
                        </div>
                    </div>

                    <TypeMessage message={sendSomething} addMessage={this.addMessage}/>

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