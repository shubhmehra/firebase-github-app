import axios from "axios";
import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Input, Container, Button, Grid, Image } from "semantic-ui-react";
import UserCard from "../Componets/UserCard";
import UserRepos from "../Componets/UserRepos";
import { UserContext } from "../Context/UserContext";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      setUser(null);
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Nota able to locate user", { type: "error" });
    }
  };

  //Put anypage behind login
  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }
  return (
    <Container style={{ marginTop: "2em" }}>
      <Grid>
        <Form>
          <Form.Field inline>
            <Input
              placeholder="Enter Username"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={fetchDetails} color="blue">
              Fetch User
            </Button>
          </Form.Field>
        </Form>
      </Grid>
      <Grid style={{ marginTop: "2em" }}>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            {user ? <UserCard user={user} /> : null}
          </Grid.Column>
          <Grid.Column>
            {user ? <UserRepos repos_url={user.repos_url} /> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Home;
