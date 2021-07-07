import React from "react";
import Store from "./UserReducer";
import Header from "./Header";
import { propNames } from "@chakra-ui/react";
import { useState } from "react";
import UserCard from "./UserCard";
import UserList from "./UserList";
import "./style.css";

export default function MainPage() {
  const [searchText, setSearchText] = useState("");

  const setSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div className="main-container">
      <div className="main-header">
        <Header setSearch={setSearch} />
      </div>
      <UserList searchText={searchText} />
    </div>
  );
}
