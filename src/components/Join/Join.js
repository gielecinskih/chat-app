import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.scss";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const roomChange = (e) => {
    setRoom(e.target.value);
  };

  const checkData = (e) => {
    if (!name || !room) e.preventDefault();
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            type="text"
            className="joinInput mt-20"
            onChange={nameChange}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            type="text"
            className="joinInput mt-20"
            onChange={roomChange}
          />
        </div>
        <Link onClick={checkData} to={`/chat?name=${name}&room=${room}`}>
          <button className="mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
