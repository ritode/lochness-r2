import "./SignUp.css";
export default function SignUp() {
  return (
    <div className="sign-up">
      <h3>Sign up for exclusive access.</h3>
      <input
        className="input p20"
        type="text"
        id="name"
        name="name"
        placeholder="Your email address"
      />
      <button>Get started</button>
      <p>You’ll receive an email with an invite link to join.</p>
    </div>
  );
}
