// Footer to be displayed on all pages (links)

import { Github, StackOverflow, Linkedin } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cont pb-3 pt-2">
        <ul className="footer-ul">
          <li>
            <a
              href="https://github.com/colinmichael89"
              target="_blank"
              rel="noreferrer noopener"
              title="Github"
            >
              <Github className="icon" size={50} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/colin-mcnatt-b92516183"
              target="_blank"
              rel="noreferrer noopener"
              title="LinkedIn"
            >
              <Linkedin className="icon" size={50} />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/19176041/colin-mcnatt"
              target="_blank"
              rel="noreferrer"
              title="Stack Overflow"
            >
              <StackOverflow className="icon" size={50} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
