// using props to render each card in project page
const Project = (props) => {
  return (
    <div className='col-lg-5 mt-5'>
      <div className='card project-card'>
        <div className='card-body'>
          <h4 className='card-title'>{props.title}</h4>
        </div>
        <img className='img' src={props.image} alt={props.title} />
        <div>
          <a
            href={props.github}
            target='_blank'
            className='btn btn-secondary col-6'
          >
            Github
          </a>
          <a
            href={props.deployed}
            target='_blank'
            className='btn btn-primary col-6'
          >
            Deployed
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
