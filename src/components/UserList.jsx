import React from "react";
import UserCard from "./UserCard";
import { connect } from "react-redux";
import "./style.css";
import { useIsPresent } from "framer-motion";

function UserList(props) {
  let userList = props.state;
  userList = userList.filter((user) => user.name.includes(props.searchText));

  const list = () => {
    return (
      <>
        {userList.length > 0 ? (
          userList.map((user) => {
            return (
              <>
                <UserCard name={user.name} email={user.email} />
              </>
            );
          })
        ) : (
          <></>
        )}
      </>
    );
  };
  return <div className="user-list">{list()}</div>;
}

const mapStateToProps = (storeState) => ({
  state: storeState.users,
});

export default connect(mapStateToProps)(UserList);
