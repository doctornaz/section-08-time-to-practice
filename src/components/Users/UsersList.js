import React from "react"
import Card from "../UI/Card";
import styled from "styled-components";

const UsersList = (props) => {
  return (
    <StyledCard>
        <StyledList>
        {props.users && props.users.map((user) => 
            <StyledItem key={user.id}>
                {user.name} ({user.age} years old) 
            </StyledItem>
        )}
        </StyledList>
    </StyledCard>
  )
};

const StyledCard = styled(Card)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 1rem;
  `;

const StyledItem = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

export default UsersList;
