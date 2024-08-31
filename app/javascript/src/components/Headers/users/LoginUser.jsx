import React, { useState } from "react";

const LoginUser = () => {
  const [formField, setFormField] = useState({
    email: "",
    password: ""
  });

  const handleFormField = (event) => {
    setFormField({ ...formField, [event.target.name]: event.target.value });
  };

  const SubmitRequest = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: formField,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-start vh-100 mt-5">
      <form
        className="w-50 p-4 border rounded bg-light"
        style={{ minHeight: "350px", marginTop: "100px" }}
        onSubmit={SubmitRequest}
      >
        <div className="form-group" style={{ marginTop: "50px" }}>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={formField.email}
            onChange={handleFormField}
            name="email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={formField.password}
            onChange={handleFormField}
            name="password"
          />
        </div>
        <button
          type="submit"
          className="mt-4 btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginUser;
