import React from "react";
import UserCard from "./UserCard";

function UserCardGroup({ users, len = 3 }) {
  const allLen = users.slice(0, len);
  const otherUsersCount = users.length - allLen.length;

  return (
    <div className="user-card-group">
      {allLen.map((user, i) => {
        return (
          <UserCard
            key={i}
            user={user}
            className={`${(i + 1) % 2 === 0 ? "even-card" : ''}`}
          />
        );
      })}

      {otherUsersCount > 0 && (
        <span className="other-users-count">+{otherUsersCount}</span>
      )}
    </div>
  );
}

export default UserCardGroup;
