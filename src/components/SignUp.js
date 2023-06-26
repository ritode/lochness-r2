import { useState } from "react";
import "./SignUp.css";
export default function SignUp() {
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (!validateEmail(email)) setIsValid(false);
    else setIsValid(true);
    console.log(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }
  };
  return (
    <div className="sign-up">
      <h3>Sign up for exclusive access.</h3>
      <input
        className="input p20"
        type="text"
        id="name"
        name="name"
        placeholder="Your email address"
        onChange={handleChange}
      />

      {!isValid && <p className="alert">Please enter a valid email.</p>}
      <button type="submit">Get started</button>
      <p>You’ll receive an email with an invite link to join.</p>
    </div>
  );
}
