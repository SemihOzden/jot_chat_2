/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';


class Login extends React.Component {
  componentDidMount() {
    // Api key has been initialied
    // eslint-disable-next-line react/prop-types
    const { apiKey } = this.props;
    window.JF.initialize({ apiKey: apiKey });
    var x = this;


    // Form questions are saved into redux store
    window.JF.getFormQuestions(this.props.formId, (response) => {
      Object.entries(response).map(([key, value], i) => {
        value.message = '';
        return x.props.dispatch({ type: 'SAVE_FORM_QUESTIONS', formQuestion: value });
      });
    }, (error) => {
      console.log(error);
    });

    window.JF.getUser((response) => {
      return x.props.dispatch({ type: 'SAVE_USERNAME', getUsername: response.username });
    }, (error) => {
      console.log(error);
    });
    window.JF.getForm(this.props.formId, (response) => {
      return x.props.dispatch({ type: 'SAVE_FORM_TITLE', getFormTitle: response.title });
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="initializeForm" />
    );
  }
}
const mapStateToProps = state => ({
  formId: state.formId,
  apiKey: state.apiKey,
  saveFormQuestions: state.saveFormQuestions
});

export default connect(mapStateToProps)(Login);
