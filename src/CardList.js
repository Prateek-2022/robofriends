import React from "react";
import Card from "./Card";

const CardList = ({ robots, search }) => {
  return (
    <div>
      {robots
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((user, i) => {
          return (
            <Card key={i} id={user.id} name={user.name} email={user.email} />
          );
        })}
    </div>
  );
};

export default CardList;
