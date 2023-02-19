import FullPageLoader from "../FullPageLoader";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Layout =(props) =>{
    const {children} =props;
    return(
        <div>
            <Navbar/>
            <FullPageLoader/>
            <Footer/>
            <main>
                <div className="content w-screen justify-center items-center">{children}</div>
            </main>
        </div>
        
    )
}

export default Layout;