import React from 'react';
import {connect} from 'react-redux';

class Login extends React.Component{

    componentDidMount(){
        let apiKey=this.props.apiKey;
        window.JF.initialize({apiKey:apiKey});


    }
    render(){
        return(
            <div className="initializeForm"></div>
        );
    }
}
const mapStateToProps=state=>({
    formId:state.formId,
    apiKey:state.apiKey
})

export default connect(mapStateToProps)(Login);