import React, { useEffect, useState } from "react";
import { Filter } from "../Helper";
import UserCard from "./UserCard";

const users = [
  {
    username: "dexter",
    firstName: "Jamal",
    lastName: "Da Conquerer",
    profileImage: require("../Assets/images/conquerer.jpeg"),
  },
  {
    username: "princess",
    firstName: "Castle",
    lastName: "Bearer",
    profileImage: null,
  },
  {
    username: "princess",
    firstName: "Castle",
    lastName: "Bearer",
    profileImage: null,
  },
  {
    username: "princess",
    firstName: "Castle",
    lastName: "Bearer",
    profileImage: null,
  },
  {
    username: "princess",
    firstName: "Castle",
    lastName: "Bearer",
    profileImage: null,
  },
  {
    username: "mario",
    firstName: "Mr",
    lastName: "Warner",
    profileImage: require("../Assets/images/conquerer.jpeg"),
  },
  {
    username: "bisi",
    firstName: "Bisi",
    lastName: "Afonja",
    profileImage: null,
  },
];

function UserList({ truncate, len = 5 }) {
  const [list, setList] = useState(users)

  
  useEffect(() => {
    const updateList = ()=> setList(users.slice(0, len))
    if (truncate) {
      updateList()
    }
  }, [len, truncate])
  
  const expand = (qty = 2) => {
    setList(users.slice(0, list.length + qty))
  };

  return (
    <>
      <ul className="users-list users">
        {list.map((user, i) => (
          <li key={i} className="user">
            <div className="user__wrapper align-center">
              <UserCard user={user} />
              <div className="user__fullname">{Filter.getFullName(user)}</div>
            </div>
          </li>
        ))}
      </ul>
      
      {(truncate && list.length < users.length) && (
        <div className="sidebar__more" onClick={() => expand(3)}>
          More
        </div>
      )}
    </>
  );
}

export default UserList;
