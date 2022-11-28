import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { BsApple, BsDashLg, BsFacebook, BsGoogle } from "react-icons/bs";

function Login() {
  const [authState, setAuthState] = useState("login");
  const isLogin = authState === "login";
  const isRegister = authState === "register";

  // const validateMessages = {
  //   required: `${label} is required!`,
  //   types: {
  //     email: `${label} is not a valid email!`,
  //     number: `${label} is not a valid number!`,
  //   },
  //   number: {
  //     range: `${label} must be between ${min} and ${max}`,
  //   },
  // };

  const rules = {
    email: [
      {
        required: true,
        message: "Please enter a valid email!",
      },
    ],
    password: [
      {
        required: true,
        message: "Please enter a valid email!",
      },
    ],
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const LoginForm = () => {
    return (
      <div className="login-card">
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="auth-form login-form"
        >
          <Form.Item
            name="email"
            className="input__wrapper input__wrapper__email"
            rules={rules.email}
          >
            <Input placeholder="Enter e-mail" />
          </Form.Item>

          <Form.Item
            name="password"
            className="input__wrapper input__wrapper_password"
            rules={rules.password}
          >
            <Input.Password placeholder="Enter Password" />
          </Form.Item>
        </Form>
      </div>
    );
  };
  const RegisterForm = () => {
    return (
      <div className="register-card">
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="auth-form login-form"
        >
          <Form.Item
            name="name"
            className="input__wrapper input__wrapper__name"
            rules={rules.string}
          >
            <Input placeholder="What would you like to be called?" />
          </Form.Item>
          
          <Form.Item
            name="email"
            className="input__wrapper input__wrapper__email"
            rules={rules.email}
          >
            <Input placeholder="Enter e-mail" />
          </Form.Item>

          <Form.Item
            name="password"
            className="input__wrapper input__wrapper_password"
            rules={rules.password}
          >
            <Input.Password placeholder="Enter Password" />
          </Form.Item>
        </Form>
      </div>
    );
  };

  return (
    <div className="auth-card">
      <div className="auth-intro">
        <div className="auth-intro__title">
          {isLogin && <span>Welcome Back</span>}
          {isRegister && <span>Join Community</span>}
        </div>
        <div className="auth-intro__subtitle">
          {isLogin && (
            <span>
              Holla, enter your details to get signed in to your account
            </span>
          )}
          {isRegister && (
            <span>Hi there, enter your details to begin your exxperience</span>
          )}
        </div>
      </div>

      <div className="auth-form">
        {isLogin && <LoginForm />}
        {isRegister && <RegisterForm />}
      </div>

      <div className="form-cta">
        {isLogin && (
          <Button block className="app-btn" htmlType="submit">
            Continue
          </Button>
        )}
        {isRegister && (
          <Button block className="app-btn" htmlType="submit">
            Join Community
          </Button>
        )}
      </div>

      <div className="alt-auth text-center">
        <div className="alt-auth__intro">
          <span className="alt-auth__icon">
            <BsDashLg />
          </span>
          { isLogin &&
            <span className="alt-auth__text">Or Sign In with</span>
          }
          { isRegister &&
            <span className="alt-auth__text">Or Continue with</span>
          }
          <span className="alt-auth__icon">
            <BsDashLg />
          </span>
        </div>

        <div className="alt-auth__auths">
          <Button className="alt-auth__btn google-auth">
            <BsGoogle className="alt-auth__btn__icon" />
            <span className="alt-auth__btn__text">Google</span>
          </Button>
          <Button className="alt-auth__btn apple-auth">
            <BsApple className="alt-auth__btn__icon" />
            <span className="alt-auth__btn__text">Apple ID</span>
          </Button>
          <Button className="alt-auth__btn facebook-auth">
            <BsFacebook className="alt-auth__btn__icon" />
            <span className="alt-auth__btn__text">Facebook</span>
          </Button>
        </div>
      </div>

      <div className="auth-switcher">
        {isLogin && (
          <div>
            Dont have an account?
            <span
              className="auth-switcher__cta"
              onClick={() => setAuthState("register")}
            >
              Join Community
            </span>
          </div>
        )}

        {isRegister && (
          <div>
            <span
              className="auth-switcher__cta"
              onClick={() => setAuthState("login")}
            >
              Login
            </span>
            to continue experience
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
