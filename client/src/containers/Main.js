import React from "react";
import CommentsContainer from "./CommentsContainer";
import CreateThingsContainer from "./CreateThingsContainer";

function Contacts() {
  return (
    <div>
      <div style={{ float: "left", width: "49%" }}>
        <h1>Comments </h1>
        <CommentsContainer />
      </div>
      <div style={{ float: "left", width: "49%" }}>
        <CreateThingsContainer />
      </div>
    </div>
  );
}
export default Contacts;
