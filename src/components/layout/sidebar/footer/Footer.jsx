

const Footer = () => {
  return (
    <div className="colorlib-footer">
      <p>
        <small>
          Copyright <script>document.write(new Date().getFullYear());</script>
          All rights reserved. Made with{" "}
          <i className="icon-heart" aria-hidden="true"></i> by{" "}
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
          <span>
            Distributed by{" "}
            <a href="https://themewagon.com" target="_blank">
              ThemeWagon
            </a>
          </span>{" "}
          
        </small>
      </p>
      <ul>
        <li>
          <a href="#">
            <i className="icon-facebook2"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-twitter2"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-linkedin2"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
