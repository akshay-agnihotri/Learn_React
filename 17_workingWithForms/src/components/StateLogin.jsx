import { useState } from "react";

export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [isEdited, setIsEdited] = useState({
    email: false,
    password: false,
  });

  const isEmailInvalid = isEdited.email && !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(event, identifier) {
    setIsEdited((prvEdit) => ({
      ...prvEdit,
      [identifier]: false,
    }));
    setEnteredValues((prvValue) => {
      return {
        ...prvValue,
        [identifier]: event.target.value,
      };
    });
  }

  function handleInputBlur(event, identifier) {
    setIsEdited((prvEdit) => ({
      ...prvEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleInputChange(e, "email")}
            value={enteredValues.email}
            onBlur={(event) => handleInputBlur(event, "email")}
          />
          <div className="control-error">
            {isEmailInvalid && <p>PLease enter a vaild email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e, "password")}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
