import React,{Component} from "react";
import TypeMessage from './typeMessage';
import {connect} from "react-redux";


 class MainContent extends Component{

    addMessage=(message)=>{

        console.log( "inputtan gelen message",message);
        this.props.dispatch({type:"SAVE_MESSAGE",typeMessage:message});
        console.log("state de olan message",this.props.saveMessage);
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
                                    <input type="button"value="Yes"/>
                                    <input type="button"value="No"/>
                                    </p>
                                <span className="time_date"> 11:01 AM | June 9</span>
                            </div>
                        </div>
                        <div className="incoming_msg">
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
    saveMessage:state.saveMessage
})

export default connect(mapStateToProps)(MainContent);