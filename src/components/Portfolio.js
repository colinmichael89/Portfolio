import Project from './pages/project';
import Footer from './Footer';
import final from '../assets/final.png';
import tracker from '../assets/tracker.png';
import scheduler from '../assets/scheduler.png';
import venue from '../assets/venue.jpg';
import weather from '../assets/weather.png';
import quiz from '../assets/quiz.png';

// Create the parent portfolio page that sends data to the Project page to render each project card

const Portfolio = () => {
  const cardInfo = [
    {
      id: 1,
      image: scheduler,
      title: 'Workday Scheduler',
      github: 'https://github.com/colinmichael89/',
      deployed: 'https://github.com/colinmichael89/',
    },
    {
      id: 2,
      image: venue,
      title: 'Venue Search Project',
      github: 'https://github.com/colinmichael89/Venue-Search-Project',
      deployed: 'https://github.com/colinmichael89/',
    },
    {
      id: 3,
      image: final,
      title: 'Pristine Clean',
      github: 'https://github.com/colinmichael89/pristine-clean',
      deployed: 'https://pristine-clean.herokuapp.com/',
    },
    {
      id: 4,
      image: tracker,
      title: 'React Task Tracker',
      github: 'https://github.com/colinmichael89/PRO-Employee-Tracker',
      deployed: 'https://github.com/colinmichael89/',
    },
    {
      id: 5,
      image: weather,
      title: 'Interactive Weather Dashboard',
      github: 'https://github.com/colinmichael89/Interactive-Weather-Dashboard',
      deployed: 'https://github.com/colinmichael89/',
    },
    {
      id: 6,
      image: quiz,
      title: 'Javascript Coding Quiz',
      github: 'https://github.com/colinmichael89/Java-Coding-Quiz',
      deployed: 'https://github.com/colinmichael89/',
    },
  ];

  // Map over the cardInfo array and send the data to the Project page to render each card
  return (
    <div className='background d-flex flex-column min-vh-100'>
      <div className='text mt-5 justify-content-center text-center'>
        <h3 className='text-center'>Portfolio</h3>
        <div className='portfolio row container justify-content-center text-center'>
          {cardInfo.map((info) => (
            <Project key={info.id} {...info} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
