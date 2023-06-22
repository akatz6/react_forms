import { useState } from "react";

function Forms() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("bad password");

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(...data.entries());
    console.log(...data.values());
    const allValues = Object.fromEntries(data);
    console.log(allValues);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forms;
