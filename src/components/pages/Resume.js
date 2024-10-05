import { FileEarmarkPerson } from 'react-bootstrap-icons';
import resume from '../../assets/Colin_McNatt_Resume.pdf';

function Resume() {
  return (
    <>
      <h2 className="resume-title">
        Download My Resume {}
        <a
          href={resume}
          download="Colin_McNatt_Resume.pdf"
          className="res-size"
          title="Resume"
        >
          <FileEarmarkPerson className="icon" size={50} />
        </a>
      </h2>

      <div className="row skill-list">
        <div className="col-md-5">
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li className="skills">HTML</li>
            <li className="skills">CSS</li>
            <li className="skills">JavaScript</li>
            <li className="skills">jQuery</li>
            <li className="skills">Responsive Design</li>
            <li className="skills">React</li>
            <li className="skills">Bootstrap</li>
          </ul>
        </div>
        <div className="col-md-5">
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li className="skills">APIs</li>
            <li className="skills">Node</li>
            <li className="skills">Express</li>
            <li className="skills">MySQL, Sequelize</li>
            <li className="skills">MongoDB, Mongoose</li>
            <li className="skills">REST</li>
            <li className="skills">GraphQL</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resume;
