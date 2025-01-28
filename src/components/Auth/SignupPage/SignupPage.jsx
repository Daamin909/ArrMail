import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./SignupPage.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    email: z.string().email({ message: "Please enter valid email" }),
    username: z
      .string()
      .min(3, { message: "Name should be at least 3 characters." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    cpassword: z.string(),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Confirm Password does not match Password",
    path: ["cpassword"],
  });
const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Creat an Account - ArrMail</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              id="username"
              {...register("username")}
            />
          </div>
          {errors.username && (
            <em className="form-error">{errors.username.message}</em>
          )}
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              id="email"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <em className="form-error">{errors.email.message}</em>
          )}
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              id="password"
              {...register("password")}
            />
          </div>
          {errors.password && (
            <em className="form-error">{errors.password.message}</em>
          )}
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              id="cpassword"
              {...register("cpassword")}
            />
          </div>
          {errors.cpassword && (
            <em className="form-error">{errors.cpassword.message}</em>
          )}
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div className="login-link">
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
