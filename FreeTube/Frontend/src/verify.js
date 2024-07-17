import React from 'react'
import firebase from './firebase'
import "./verify.css"
import Back from '../common/back/Back'

class OTP extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          alert("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          alert("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      window.location.href = '/courses';
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  render() {
    return (
       
      <div>
         <Back title='Verify Your Phone Number'></Back>
        <div className='contain'>
        <form onSubmit={this.onSignInSubmit}>
        <h2>Verify Your Mobile Number</h2>
          <div id="sign-in-button"></div>
          <div className="form-group">
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
          </div>
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <div className="form-group">
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>
    )
  }
}
export default OTP;