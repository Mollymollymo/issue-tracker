import Button from "../Button";
import OpenIssues from "../OpenIssues";
import InProgressIssues from "../InProgressIssues";
import DoneIssues from "../DoneIssues";
import React, { useState } from "react";

const IssuesPage = (props) => {
  const [status, setStatus] = useState("open");

  return (
    <div className="w-screen h-screen ">
      <div className=" flex justify-center mt-24">
        <Button
          text="Open"
          onClick={() => {
            setStatus("open");
          }}
        />
        <Button
          text="In progress"
          onClick={() => {
            setStatus("inProgress");
          }}
        />
        <Button
          text="Done"
          onClick={() => {
            setStatus("done");
          }}
        />
      </div>
      {status === "open" && <OpenIssues />}
      {status === "inProgress" && <InProgressIssues />}
      {status === "done" && <DoneIssues />}
    </div>
  );
};

export default IssuesPage;
