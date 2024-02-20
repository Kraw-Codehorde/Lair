import MainContent from "./layout/maincontent/MainContent";
import Sidebar from "./layout/sidebar/Sidebar";

const Layout = () => {
  return (
    <div id="colorlib-page">
      <div className="container-wrap">
      
        <Sidebar />
          <MainContent />
        
        
      </div>
    </div>
  );
};

export default Layout;
