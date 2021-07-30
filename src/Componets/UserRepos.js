import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";

const UserRepos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    // const { data } = await axios.get(repos_url);
    // setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, repos_url);

  return (
    <Card.Group>
      <Card fluid>
        <Image wrapped ui={false} />
        <Card.Content>
          <Card.Header>Daniel</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card fluid>
        <Image wrapped ui={false} />
        <Card.Content>
          <Card.Header>Daniel</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default UserRepos;
