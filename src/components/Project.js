import { Github } from 'react-bootstrap-icons';

function Project(props) {
  const title = props.title;
  const url = props.url;
  const image = props.image;
  const description = props.description;
  const github = props.github;

  //Project Card filled with data from the project data file
  return (
    <div className="card">
      <div className="card-img">
        <a href={url} target="_blank" rel="noreferrer noopener">
          <img src={image} class="card-img-top" alt="Application" />
        </a>
      </div>
      <div className="card-body">
        <div className="project-title">
          <h4 className="card-title">{title}</h4>
          <a href={github} target="_blank" rel="noreferrer noopener">
            <Github className="icon ms-2" size={50} />
          </a>
        </div>
        <p className="card-text pt-2">{description}</p>
      </div>
    </div>
  );
}

export default Project;
