//import { react } from react;
import "../App.css";
function Form() {
  return (
    <>
      <div className="ful-screen">
        <div className="login-container">
          <h1 className="login-title">Wellcome</h1>
          <form className="form">
            <div className="input-group">
              <label for="username">UserName</label>
              <input type="username" name="username" id="username" />
              <span></span>
            </div>
            <div className="or">
              <p>OR</p>
            </div>
            <div className="input-group">
              <label for="phone number">Phone Number</label>
              <input for="phone number" name="phone number" id="phone number" />
            </div>
            <div>
              <button type="submit" className="login-button">
                Login
              </button>
              <br />
              <button type="submit" className="login-button">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;
