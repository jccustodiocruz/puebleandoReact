import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useForm } from "../../hooks/useForm";

export const LoginForm = async (props) => {
  const { switchToSignup } = useContext(AccountContext);

  const [formValues, handleInputChange] = useForm({
    username: "",
    password: "",
  });
  let logIn = false;
  const { username, password } = formValues;

 

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleInputChange}
          value={username}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton
        type="submit"
        onClick={() => {
          logIn = !logIn;
        }}
      >
        Sign In
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};
