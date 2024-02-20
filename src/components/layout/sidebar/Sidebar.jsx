import Footer from "./footer/Footer";
import Navigation from "./nav/Navigation";
import Profile from "./profile/Profile";

const Sidebar = () => {
  return (
    <>
      <a
        href="#"
        className="js-colorlib-nav-toggle colorlib-nav-toggle"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <i></i>
      </a>
      <aside
        id="colorlib-aside"
        role="complementary"
        className="border js-fullheight"
      >
        <Profile />
        <Navigation />
        <Footer />
      </aside>
    </>
  );
};

export default Sidebar;
