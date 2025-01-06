import React, { useState } from "react";
import Header from "../components/Header";
import TeamData from "../Data/teamlists.json";
import Cards from "../components/Cards";

const Teams = () => {
  const [lists, setLists] = useState(TeamData);

  return (
    <div>
      <Header />
      <div
        className="row"
        style={{ marginLeft: "-1px", backgroundColor: "skyblue" }}
      >
        {lists.map((teamdetails) => (
          <div className="col-sm-3">
            <Cards teamdetails={teamdetails} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
