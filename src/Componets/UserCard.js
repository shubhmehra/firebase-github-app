import React from "react";
import { Card, Image } from "semantic-ui-react";

const UserCard = ({ user }) => {
  return (
    <>
      <Card color="yellow">
        <Image wrapped ui={false} src={user.avatar_url} />
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>{user.location}</Card.Meta>
          <Card.Description>{user.bio}</Card.Description>
          <Card.Content extra>
            Available for hire:{user.hireable ? "Yes" : "Nope"}
            <span>Followers {user.followers}</span>
          </Card.Content>
        </Card.Content>
      </Card>
    </>
  );
};

export default UserCard;
