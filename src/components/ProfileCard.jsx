function ProfileCard({ name, designation, college, contact }) {
  return (
    <aside className="profile-card">
      <div className="profile-top">
        <h1>{name}</h1>
        <p className="designation">{designation}</p>
        <p className="college">{college}</p>
      </div>

      <div className="profile-info">
        <div><h4>Institute Email</h4><p>sa24csb0a75@student.nitw.ac.in</p></div>
        <div><h4>Personal Email</h4><p>amritasrikantam@gmail.com</p></div>
        <div><h4>Phone</h4><p>{contact}</p></div>
        <div><h4>Roll No.</h4><p>24CSB0A75</p></div>
      </div>

      <div className="profile-links">
        <a href="https://github.com/Amritasrikantam123" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="#" onClick={(event) => event.preventDefault()}>Resume</a>
      </div>
    </aside>
  );
}

export default ProfileCard;