import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TableComponent from "../table/tableComponent";
require("./autocompleteComponent.scss");

function AutoComplete(props) {
  const [users, setUsers] = useState(props.usersData);
  const [selectedUser, setSelectedUser] = useState(props.usersData);
  const [filteredUsers, setFilteredUsers] = useState(props.usersData);

  useEffect(() => {
    if (props.usersData) {
      setUsers(props.usersData);
      setFilteredUsers(props.usersData);
    }
  }, [props.usersData]);

  const searchString = (event) => {
    if (event.target.value) {
      var reg = new RegExp(`^${event.target.value.toLowerCase()}`);
      const resp = users.filter(function (term) {
        return reg.test(term.username.toLowerCase()) ? term : "";
      });
      setFilteredUsers(resp);
    } else {
      setFilteredUsers(props.usersData);
    }
  };

  const onSelectUser = (user) => {
    const username = user.options[0].value;
    const userdata = users.filter((user) => user.username === username)[0];
    setSelectedUser(userdata);
  };

  return (
    <div>
      <input
        type="text"
        list="username"
        onChange={searchString}
        className="input-box-style"
      />
      <datalist id="username">
        {filteredUsers?.map((user, index) => {
          return <option key={index} value={user?.username} />;
        })}
      </datalist>
      <Button
        onClick={() => onSelectUser(document.getElementById("username"))}
        variant="contained"
        className="margin-left"
      >
        Submit
      </Button>
      <div className="table-wrapper">
        {selectedUser ? <TableComponent userData={selectedUser} /> : "hi"}
      </div>
    </div>
  );
}

export default AutoComplete;
