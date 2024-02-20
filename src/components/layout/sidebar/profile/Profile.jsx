import React from "react";

const Profile = () => {
  return (
    <div className="text-center">
      <div
        className="author-img"
        style={{ backgroundImage: 'url(static/images/about.jpg)' }}
      ></div>
      <h1 id="colorlib-logo">
        <a href="index.html">Jackson Ford</a>
      </h1>
      <span className="position">
        <a href="#">UI/UX/Designer</a> in Philippines
      </span>
    </div>
  );
};

export default Profile;
