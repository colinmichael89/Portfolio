import React from 'react';
import profilePic from '../../assets/images/colin-profile.jpg';

function Home() {
  return (
    <>
      <div className="row about">
        <h2>About</h2>
        <div className="col-lg-10">
          Colin has lived in Denver, Colorado fo the past 5 years where he owns
          and opeartes a commercial cleaning business. He has a passion for
          technology and has been a self taught developer for the past 2 years.
          He has a background in sales and customer service and is excited to
          bring his skills to the tech industry. He is a graduate of the
          University of Central Oklahoma with a degree in Business
          Administration. He is a hard worker and is excited to learn and grow
          in the tech industry.
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
