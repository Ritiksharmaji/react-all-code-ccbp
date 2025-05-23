import { Component } from 'react';
import './index.css';

class RegistrationForm extends Component {
  state = {
    FirstName: '',
    LastName: '',
    firstnameError: false,
    lastnameError: false,
    errorMsg: 'Required',
    issubmit: false,
  };

  onchangeFirstName = (event) => {
    this.setState({ FirstName: event.target.value });
  };

  onChangeLastName = (event) => {
    this.setState({ LastName: event.target.value });
  };

  blurFirstName = () => {
    const { FirstName } = this.state;
    if (FirstName === '') {
      this.setState({ firstnameError: true });
    } else {
      this.setState({ firstnameError: false });
    }
  };

  blurLastName = () => {
    const { LastName } = this.state;
    if (LastName === '') {
      this.setState({ lastnameError: true });
    } else {
      this.setState({ lastnameError: false });
    }
  };

  submitForm = (event) => {
    event.preventDefault();
    const { FirstName, LastName } = this.state;

    if (FirstName === '') {
      this.setState({ firstnameError: true });
    }
    if (LastName === '') {
      this.setState({ lastnameError: true });
    }
    if (FirstName !== '' && LastName !== '') {
      console.log('success');
      this.setState({ issubmit: true });
    }
  };

  renderFirstNameField = () => {
    const { FirstName } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className="username-input-field"
          value={FirstName}
          onChange={this.onchangeFirstName}
          placeholder="First name"
          onBlur={this.blurFirstName}
        />
      </>
    );
  };

  renderLastNameField = () => {
    const { LastName } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className="password-input-field"
          value={LastName}
          onChange={this.onChangeLastName}
          placeholder="Last name"
          onBlur={this.blurLastName}
        />
      </>
    );
  };

  render() {
    const { firstnameError, lastnameError, errorMsg, issubmit } = this.state;

    return (
      <div className="login-form-container">
        <h1 className="heading">Registration Form</h1>
        {!issubmit ? (
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="input-container">{this.renderFirstNameField()}</div>
            {firstnameError && <p className="error-message">*{errorMsg}</p>}
            <div className="input-container">{this.renderLastNameField()}</div>
            {lastnameError && <p className="error-message">*{errorMsg}</p>}
            <button type="submit" className="login-button">
              Submit
            </button>
          </form>
        ) : (
          <div className="success-container">
            <p>Submitted Successfully</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-image"
            />
            <button
              type="button"
              className="submit-another-response-button"
              onClick={() => this.setState({ issubmit: false, FirstName: '', LastName: '' })}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default RegistrationForm;
