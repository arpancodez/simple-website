import React from 'react';

const Profile = () => {
  return (
    <div className="container">
      <div className="profile">
        <div className="name">
          <h1>exril</h1>
          <p>18 y/o</p>
          <p>works at: cemetery studios</p>
          <div className="social">
            <a href="https://github.com/exrod"><i className="fa fa-github"></i></a>
            <a href="https://www.instagram.com/exrod"><i className="fa fa-instagram"></i></a>
            <a href="mailto:exrod@example.com"><i className="fa fa-envelope"></i></a>
          </div>
        </div>
        <div className="avatar">
          <img src="https://avatars.githubusercontent.com/u/66589561?v=4" alt="Profile Avatar" />
        </div>
      </div>
      <div className="projects">
        <div className="project">
          <h3>exrod/gym-webapp</h3>
          <p>A Full Stack Gym Web Application in Go Lang</p>
          <div className="stats">
            <span className="language">Go</span>
            <span className="star">★ 11</span>
            <span className="fork">Forks 5</span>
          </div>
        </div>
        <div className="project">
          <h3>exrod/tomb-anime-cli</h3>
          <p>A CLI tool for managing anime lists</p>
          <div className="stats">
            <span className="language">Rust</span>
            <span className="star">★ 20</span>
            <span className="fork">Forks 7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;