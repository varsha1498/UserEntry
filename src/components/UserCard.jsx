import React from "react";
import { addUser } from "./UserReducer";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import "./style.css";

export default function UserCard(props) {
  return (
    <div className="user-card">
      <div className="avatar">
        <Avatar name={props.name} src="https://bit.ly/tioluwani-kolawole" />
      </div>
      <div className="content">
        <p>Username: {props.name}</p>
        <p>email: {props.email}</p>
      </div>
    </div>
  );
}

// const mapStateToProps = storeState => ({
//    state: storeState.state
//   });

//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(UserCard);
