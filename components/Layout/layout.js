
import Nav from "../navigation/nav";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = ({children}) => {
    return (
        <div>
          <Header />
          <Nav />    
          {children}  
          <Footer />
         
        </div>
        
    );
}

export default Layout;