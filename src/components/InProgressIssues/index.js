import Issues from "../Issues";

const InProgressIssues = () => {
  return (
    <div className="w-screen h-screen flex-col ">
      <Issues title="title4" body="body4" />
      <Issues title="title5" body="body5" />
      <Issues title="title6" body="body6" />
    </div>
  );
};

export default InProgressIssues;
