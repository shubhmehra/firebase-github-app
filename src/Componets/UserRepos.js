import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";

const UserRepos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, repos_url);

  return (
    <Card.Group>
      {repos.map((repo) => (
        <Card fluid color="orange">
          <Card.Content>
            <Card.Header>{repo.name}</Card.Header>
            <Card.Meta>{repo.language}</Card.Meta>
            <Card.Description>{repo.description}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default UserRepos;
