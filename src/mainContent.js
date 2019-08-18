import React,{Component} from "react";
import TypeMessage from './typeMessage';
import {connect} from "react-redux";


 class MainContent extends Component{
     constructor(props){
         super(props);
         this.state={
             count:[],
             questions:[]
         }

     }

    addMessage=(message)=>{

        console.log( "inputtan gelen message",message);
        message.keyId = Math.random();
        this.props.dispatch({type:"SAVE_MESSAGE",typeMessage:message});

    }


    moreCount=()=>{
        console.log("more count tıklandı");
        this.setState(prevState=>({
            count:prevState.count+1
        }));
    }

    _nextQuestion=()=>{
        this.setState(prevState=>({
            count:prevState.count+1
        }));


        Object.entries(this.props.saveFormQuestions).map(([key, value], i) => {

                //if(key===this.state.count.toString() && value.type==='control_fullname'){
                    return (
                        this.setState(prevState=>({
                            questions:prevState.questions.concat(value)
                        }))

                    );
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

                                if(item.type==='control_fullname' && item.order===this.state.count.toString()){
                                    return(
                                        <div className="incoming_msg" key={item.qid}>
                                            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                    alt="sunil"/>
                                            </div>
                                            <div className="received_msg">
                                                <div className="received_withd_msg">
                                                    <p>{item.type}</p>
                                                    <p>

                                                    </p>
                                                    <span className="time_date"> 11:01 AM | June 9</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}else if(item.type==='control_email' && item.order===this.state.count.toString()){
                                        return(
                                            <div className="incoming_msg" key={item.qid}>
                                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                        alt="sunil"/>
                                                </div>
                                                <div className="received_msg">
                                                    <div className="received_withd_msg">
                                                        <p>{item.type}</p>
                                                        <p>

                                                        </p>
                                                        <span className="time_date"> 11:01 AM | June 9</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }else if(item.type==='control_textarea' && item.order===this.state.count.toString()){
                                        return(
                                            <div className="incoming_msg" key={item.qid}>
                                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                                        alt="sunil"/>
                                                </div>
                                                <div className="received_msg">
                                                    <div className="received_withd_msg">
                                                        <p>{item.type}</p>
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

                        {/* <div className="incoming_msg">
                            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                    alt="sunil"/>
                            </div>
                            <div className="received_msg">
                                <div className="received_withd_msg">
                                    <p>Please write your name and surname.</p>
                                    <p>
                                        <input type="text" placeholder="Name" className="nameInput"/>
                                        <input type="text" placeholder="Surname" className="surnameInput"/>
                                        <input type="button"value="Next>>" className="nextButton"/>
                                    </p>
                                    <span className="time_date"> 11:01 AM | June 9</span>
                                </div>
                            </div>
                        </div>

                        <div className="incoming_msg">
                            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                    alt="sunil" />
                            </div>
                            <div className="received_msg">
                                <div className="received_withd_msg">
                                <p>Please write your e-mail.</p>
                                    <p>
                                        <input type="text" placeholder="Email" className="emailInput"/>
                                        <input type="button"value="Next>>" className="nextButton"/>
                                    </p>
                                    <span className="time_date"> 11:02 AM | June 9</span>
                                </div>
                            </div>
                        </div>
                        <div className="incoming_msg">
                            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                    alt="sunil" />
                            </div>
                            <div className="received_msg">
                                <div className="received_withd_msg">
                                <p>Please select date.</p>
                                    <p>
                                        <input type="date"  className="dateInput"/>
                                        <input type="button"value="Next>>" className="nextButton"/>
                                    </p>
                                    <span className="time_date"> 11:03 AM | June 9</span>
                                </div>
                            </div>
                        </div>
                        <div className="incoming_msg">
                            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                    alt="sunil" />
                            </div>
                            <div className="received_msg">
                                <div className="received_withd_msg">
                                <p>Please type a question.</p>
                                    <p>
                                        <textarea type="date"  className="textareaInput"/>
                                        <input type="button"value="Next>>" className="nextButton"/>
                                    </p>
                                    <span className="time_date"> 11:04 AM | June 9</span>
                                </div>
                            </div>
                        </div>
                        <div className="incoming_msg">
                            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                    alt="sunil" />
                            </div>
                            <div className="received_msg">
                                <div className="received_withd_msg">
                                <p>Please select a option.</p>
                                    <p>
                                    <input type="button"value="Next>>" className="nextButton"/>
                                    <input type="radio" name="gender" value="male" /> Option 1<br/>
                                    <input type="radio" name="gender" value="female"/> Option 2<br/>
                                    <input type="radio" name="gender" value="other"/> Option 3<br/>

                                    </p>
                                    <span className="time_date"> 11:04 AM | June 9</span>
                                </div>
                            </div>
                        </div>
                        <div className="incoming_msg">
                            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png"
                                    alt="sunil" />
                            </div>
                            <div className="received_msg">
                                <div className="received_withd_msg">
                                <p>Please select an option or options.</p>
                                    <p>
                                    <input type="button"value="Next>>" className="nextButton"/>
                                    <input type="checkbox" name="vehicle" value="Bike"/> I have a bike<br/>
                                    <input type="checkbox" name="vehicle" value="Car" /> I have a car

                                    </p>
                                    <span className="time_date"> 11:04 AM | June 9</span>
                                </div>
                            </div>
                        </div>
                        <div className="outgoing_msg">
                        <div className="outgoing_msg_img"> <img src="jot_pencil.png"
                                    alt="pencil"/>
                            </div>
                            <div className="sent_msg">
                                <p>
                                    You fullfiled all of the fields in the form. Do you have any questions?<br/>
                                    <input type="button"value="Yes"/>
                                    <input type="button"value="No"/>
                                    </p>
                                <span className="time_date"> 11:01 AM | June 9</span>
                            </div>
                        </div> */}
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