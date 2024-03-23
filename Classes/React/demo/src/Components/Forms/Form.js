import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [occupation, setOccupation] = useState("");

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };
  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onChangeAgeHandler = (event) => {
    setAge(event.target.value);
  };
  const onChangeOccupationHandler = (event) => {
    setOccupation(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const obj = {
      name: name,
      age: age,
      occupation: occupation,
      email: email,
    };
    alert(`FormData ${JSON.stringify(obj)}`);
  };
  return (
    <div className="wrapper">
      <h1>User Profile</h1>
      <form className="form" onSubmit={submitHandler}>
        <div className="item">
          <label for="name">Name :</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={onChangeNameHandler}
          />
        </div>
        <div className="item">
          <label for="email">Email :</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={onChangeEmailHandler}
          />
        </div>
        <div className="item">
          <label for="age">Age :</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={onChangeAgeHandler}
          />
        </div>
        <div className="item">
          <label for="occupation">Occupation :</label>
          <input
            id="occupation"
            type="text"
            value={occupation}
            onChange={onChangeOccupationHandler}
          />
        </div>
        <button>Create Profile</button>
      </form>
    </div>
  );
};

export default Form;
