import React from 'react';
import Github2 from '../images/Footer/github2.png';
import Gmail from '../images/Footer/gmail.png';
import Linkedin from '../images/Footer/linkedin.png';
import Whats from '../images/Footer/whatsapp.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li>
            <a href="https://github.com/dedojs" target="_blank" rel="noreferrer">
              <img src={ Github2 } alt="github" />
            </a>
          </li>
          <li>
            <a href="mailto:xandresousax@gmail.com" target="_blank" rel="noreferrer">
              <img src={ Gmail } alt="gmail" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andre-luis-sousa/" target="_blank" rel="noreferrer">
              <img src={ Linkedin } alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5577988020059" target="_blank" rel="noreferrer">
              <img src={ Whats } alt="whatsapp" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
