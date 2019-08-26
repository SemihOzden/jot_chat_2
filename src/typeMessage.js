import React,{Component} from "react";
import {connect} from 'react-redux';

class TypeMessage extends Component{
    constructor(props){
        super(props)
        this.state={
            content:''
        }
    }

    handleChange=(event)=>{

        this.setState({content:event.target.value});

    }

    handleSubmit=(event)=>{
        event.preventDefault();
        if(this.props.allMessages.length===0 && this.state.content!=='' && (this.state.content==='yes' || this.state.content==='Yes' || this.state.content==='YES') ){
            console.log('tıklandı');
            this.props.nextQuestion();
            this.setState({content:''});
        }else if(this.state.content!=='' && this.props.allMessages.length!==0){
        this.props.addMessage(this.state);
        this.setState({content:''});
        }


    }

    render(){

            return(
                <div className="type_msg">
                    <div className="input_msg_write">


                        <input type="text" className="write_msg" value={this.state.content}  onChange={this.handleChange} placeholder={this.props.message} />
                        <button className="msg_send_btn" onClick={this.handleSubmit}  type="button"><i className="fa fa-paper-plane-o"
                                aria-hidden="true"></i></button>

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
    allMessages:state.allMessages
})

export default connect(mapStateToProps) (TypeMessage);