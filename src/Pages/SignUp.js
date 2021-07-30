import React, { useState, useContext } from "react";
import {
  Grid,
  Image,
  Form,
  Button,
  Card,
  Container,
  Header,
} from "semantic-ui-react";
import firebase from "firebase/app";
import { UserContext } from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container text style={{ marginTop: "2em" }}>
        <Header as="h3">Signup form</Header>

        <Card color="red" fluid>
          <Card.Content>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>Email</label>
                <input
                  placeholder="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  placeholder="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Field>
              <Button type="submit" fluid color="blue">
                Signup
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
};

export default SignUp;
