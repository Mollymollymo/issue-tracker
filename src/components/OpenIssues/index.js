import Issues from "../Issues";

const OpenIssues = () => {
  return (
    <div className="w-screen h-screen flex-col ">
      <Issues title="title1" body="body1" />
      <Issues title="title2" body="body2" />
      <Issues title="title3" body="body3" />
    </div>
  );
};

export default OpenIssues;
