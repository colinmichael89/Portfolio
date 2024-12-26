import React from 'react';
import profilePic from '../../assets/images/colin-profile.jpg';

function Home() {
  return (
    <>
      <div className="row about">
        <h2>About</h2>
        <div className="col-lg-10">
          Hi, I'm Colin, a newly certified Fullstack Developer. I graduated in
          2015 from the University of Central Oklahoma with a Bachelors degree
          in Business Management. Looking for adventure, I sold my home in 2017
          and moved to Denver, Colorado. Using my knowledge of business I
          started a commercial cleaning business, Pristine Clean, that I own and
          operate currently. As my company grew and became more autonomous, I
          began searching for a new passion to pursue. Having taken and enjoyed
          a few computer programming classes in college, I chose to complete the
          full-stack programming bootcamp at the University of Denver. I earned
          my certificate in mid-December 2022, where I developed proficiencies
          in HTML/CSS, JavaScript, GraphQL, MongoDB, Express.js along with many
          other programming technologies. With my passion for learning, I have
          continued this path by taking multiple programming courses offered
          through Udemy and am currently attending the University of Colorado
          Boulder to earn my Bachelor of Science in Computer Science. With this
          new knowledge and skill set, I am excited to start a new chapter in 
          computer programming.
        </div>
      </div>
      <div className="row about-img">
        <div className="col-lg-5 center">
          <img src={profilePic} alt="Colin's profile" className="pic" />
        </div>
      </div>
    </>
  );
}

export default Home;
