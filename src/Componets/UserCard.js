import React from "react";
import { Card, Image } from "semantic-ui-react";

const UserCard = ({ user }) => {
  return (
    <>
      <Card>
        <Image wrapped ui={false} />
        <Card.Content>
          <Card.Header>Daniel</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};

export default UserCard;
