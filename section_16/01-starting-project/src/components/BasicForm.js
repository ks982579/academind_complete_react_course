import React from "react";
import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.trim().includes('@');

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const firstNameClass = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClass = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClass = emailHasError ? 'form-control invalid' : 'form-control';

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      // user shouldn't get this far w/disabled submit button anyway. 
      return;
    }
    console.log("Submitted");
    console.log(firstNameValue, lastNameValue, emailValue);
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameHasError && <p className="error-text">Please enter a first name.</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {lastNameHasError && <p className="error-text">Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;