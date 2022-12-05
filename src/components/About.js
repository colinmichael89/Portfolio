import Footer from './Footer';
import Image from '../assets/colin-profile.JPG';

const About = () => {
  return (
    <div className='background d-flex flex-column min-vh-100'>
      <div className='text mt-5 text-center'>
        <h2>About</h2>
        <div className='about'>
          <p>
            Colin has lived in Denver, Colorado fo the past 5 years where he
            owns and opeartes a commercial cleaning business. He has a passion
            for technology and has been a self taught developer for the past 2
            years. He has a background in sales and customer service and is
            excited to bring his skills to the tech industry. He is a graduate
            of the University of Central Oklahoma with a degree in Business
            Administration. He is a hard worker and is excited to learn and grow
            in the tech industry.
          </p>
          <p>Currently working..</p>
          <p>More bout me outside of work..</p>
        </div>
        <img
          className='about-image rounded-circle mt-5'
          src={Image}
          alt="Colin's profile"
          height='400px'
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
