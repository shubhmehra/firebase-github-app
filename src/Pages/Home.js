import React from "react";
import { Form, Input, Container, Button, Grid, Image } from "semantic-ui-react";
import UserCard from "../Componets/UserCard";
import UserRepos from "../Componets/UserRepos";

const Home = () => {
  return (
    <Container style={{ marginTop: "2em" }}>
      <Grid>
        <Form>
          <Form.Field inline>
            <Input placeholder="First name" />
            <Button color="blue">Fetch User</Button>
          </Form.Field>
        </Form>
      </Grid>
      <Grid style={{ marginTop: "2em" }}>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            <UserCard />
          </Grid.Column>
          <Grid.Column>
            <UserRepos />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Home;
