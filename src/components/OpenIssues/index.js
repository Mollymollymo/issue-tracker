import Issuses from "../Issuses";

const OpenIssues = () => {
  return (
    <div className="w-screen h-screen flex-col ">
      <Issuses title="title1" body="body1" />
      <Issuses title="title2" body="body2" />
      <Issuses title="title3" body="body3" />
    </div>
  );
};

export default OpenIssues;
