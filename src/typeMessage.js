import React,{Component} from "react";

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
        this.props.addMessage(this.state);
        this.setState({content:''});
    }

    render(){
    return(
        <div className="type_msg">
            <div className="input_msg_write">
                <form >
                <input type="text" className="write_msg" value={this.state.content}  onChange={this.handleChange} placeholder={this.props.message} />
                <button className="msg_send_btn" onClick={this.handleSubmit}  type="button"><i className="fa fa-paper-plane-o"
                        aria-hidden="true"></i></button>
                </form>
            </div>
        </div>
    );
    }
}

export default TypeMessage;