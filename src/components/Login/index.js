import { Component } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import Navbar from "../Navbar";
import toggleTheme from "../Toggle";

import {
  LoginAppContainer,
  LoginSideContainer,
  LoginSideText,
  LoginContainer,
  LoginForm,
  InputElement,
  InputLabel,
  ErrorMessageField,
  LoginSubmitButton,
  LoginLoader,
} from "./styledComponents";

class Login extends Component {
  state = {
    isLoginLoading: false,
    inputUserError: "",
    inputPasswordError: "",
    username: "",
    password: "",
    apiError: "",
  };

  loginSuccess = (data) => {
    const successToken = data.token;
    const { history } = this.props;
    localStorage.setItem("login-token", successToken);
    history.replace("/");
  };

  loginFailure = (error) => {
    const errorMessage = error.message;
    this.setState({
      apiError: errorMessage,
      inputUserError: "",
      inputPasswordError: "",
    });
  };

  onChangeUser = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onClickSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isLoginLoading: true });
    const { password, username } = this.state;
    if (username !== "" && password !== "") {
      this.setState({
        inputUserError: "",
        inputPasswordError: "",
        apiError: "",
      });
      const userDetails = {
        username,
        password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      };
      const loginUrl = "https://demo.credy.in/api/v1/usermodule/login/";

      const response = await fetch(loginUrl, options);
      const receivedData = await response.json();
      if (receivedData.is_success) {
        this.loginSuccess(receivedData.data);
      } else {
        this.loginFailure(receivedData.error);
      }
    } else {
      if (username === "" && password !== "") {
        this.setState({ inputUserError: "*Required" });
      } else if (username !== "" && password === "") {
        this.setState({ inputPasswordError: "*Required" });
      } else {
        this.setState({
          inputUserError: "*Required",
          inputPasswordError: "*Required",
        });
      }
    }
    this.setState({ isLoginLoading: false });
  };

  renderLoginForm = () => {
    const {
      inputUserError,
      inputPasswordError,
      username,
      password,
      apiError,
      isLoginLoading,
    } = this.state;
    return isLoginLoading ? (
      <LoginLoader>
        <Loader type="ThreeDots" color="#181279" height={80} width={80} />
      </LoginLoader>
    ) : (
      <LoginContainer>
        <LoginSideContainer>
          <LoginSideText>Login </LoginSideText>
        </LoginSideContainer>
        <LoginForm onSubmit={this.onClickSubmit}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <InputElement
            type="text"
            id="username"
            placeholder="username"
            onChange={this.onChangeUser}
            value={username}
          />
          <ErrorMessageField>{inputUserError}</ErrorMessageField>
          <InputLabel htmlFor="password">Password</InputLabel>
          <InputElement
            type="password"
            id="password"
            placeholder="password"
            onChange={this.onChangePassword}
            value={password}
          />
          <ErrorMessageField>{inputPasswordError}</ErrorMessageField>
          <LoginSubmitButton type="submit">Login</LoginSubmitButton>
          <ErrorMessageField>{apiError}</ErrorMessageField>
        </LoginForm>
      </LoginContainer>
    );
  };

  renderLoginLoader = () => (
    <LoginLoader>
      <Loader type="Oval" color="#84f0f5" />
    </LoginLoader>
  );

  render() {
    const { isLoginLoading } = this.state;
    const userLocalStorage = localStorage.getItem("login-token");
    if (userLocalStorage !== null) {
      return <Redirect to="/" />;
    }
    return isLoginLoading ? (
      this.renderLoginForm()
    ) : (
      <LoginAppContainer>{this.renderLoginForm()}</LoginAppContainer>
    );
  }
}

export default Login;
