import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import style from "./login.module.css";

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <section className={` ${style.section}`}>
      <div className={`${style.container}`}>
        <h3
          className=""
          style={{ marginBottom: "10px", color: "rgb(28, 132, 206)" }}
        >
          "What's Good in Da Hood?"
        </h3>
        <div className={style.formcontainer}>
          {data ? (
            <p>
              Success! You may now head
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit} className={`${style.form}`}>
              <label htmlFor="email">
                <p>Email</p>
                <input
                  className=""
                  placeholder="Your email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="pwd">
                <p>Password</p>
                <input
                  className=""
                  placeholder="******"
                  name="password"
                  type="password"
                  required
                  value={formState.password}
                  onChange={handleChange}
                />
              </label>
              <button className="" style={{ cursor: "pointer" }} type="submit">
                Continue
              </button>
            </form>
          )}
          <div>
            <p>
              Not a member? Signup{" "}
              <span>
                <Link to="/signup" style={{ color: "rgb(28, 132, 206)" }}>
                  here
                </Link>
              </span>
            </p>
          </div>

          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
