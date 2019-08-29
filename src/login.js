import React from 'react';
import {connect} from 'react-redux';


class Login extends React.Component{


    componentDidMount(){
        //Api key has been initialied
        let apiKey=this.props.apiKey;
        window.JF.initialize({apiKey:apiKey});
        var x=this;

        //Form questions are saved into redux store
        window.JF.getFormQuestions(this.props.formId, function(response){
               x.props.dispatch({type:"SAVE_FORM_QUESTIONS",formQuestion:response});
               console.log(x.props.saveFormQuestions);
        },function(error){
            console.log(error);
        });
    }

    render(){
        return(
            <div className="initializeForm"></div>
        );
    }
}
const mapStateToProps=state=>({
    formId:state.formId,
    apiKey:state.apiKey,
    saveFormQuestions:state.saveFormQuestions
})

export default connect(mapStateToProps)(Login);