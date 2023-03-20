import Issuses from "../Issuses";

const InProgressIssues = () => {
  return (
    <div className="w-screen h-screen flex-col ">
      <Issuses title="title4" body="body4" />
      <Issuses title="title5" body="body5" />
      <Issuses title="title6" body="body6" />
    </div>
  );
};

export default InProgressIssues;
