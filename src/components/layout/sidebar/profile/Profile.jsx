

const Profile = () => {
  return (
    <div className="text-center">
      <div
        className="author-img"
        style={{ backgroundImage: 'url(https://media.licdn.com/dms/image/D4D03AQEStFYA3mZ6nQ/profile-displayphoto-shrink_400_400/0/1709851423480?e=1715212800&v=beta&t=oJm10-d0xEvl6edC0vv2eUgzsdpnH23AEbQyHkk3OEA)' }}
      ></div>
      <h1 id="colorlib-logo">
        <a href="index.html">Nico D Kraw</a>
      </h1>
      <span className="position">
        <a href="https://www.linkedin.com/in/nicolas-kraw-022003121/" target="_blank">Full Stack Developer</a> in Buenos Aires
      </span>
    </div>
  );
};

export default Profile;
