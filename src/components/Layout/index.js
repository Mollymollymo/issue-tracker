import FullPageLoader from "../FullPageLoader";
import Navbar from "../Navbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {/* <FullPageLoader/> */}
      <main>
        <div className="content w-screen justify-center items-center">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
