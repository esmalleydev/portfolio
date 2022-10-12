import React from 'react';
import {ReactComponent as GithubSVG} from './svg/github.svg';
import {ReactComponent as FacebookSVG} from './svg/facebook.svg';
import {ReactComponent as LinkedInSVG} from './svg/linkedin.svg';
import {ReactComponent as EmailSVG} from './svg/email.svg';

import './css/index.css';

const h2Style = {
  'textAlign': 'center',
};

const spanStyle = {
  'vertical-align': 'top',
  'margin-right': '10px',
  'font-size': '20px'
};

const btnContainerStyle = {
  'margin-top': '20px',
};


class Me extends React.Component {

  handleGithub() {
    window.open('https://www.github.com/esmalleydev', '_blank');
  }

  handleLinkedIn() {
    window.open('https://www.linkedin.com/pub/evan-smalley/3a/55a/31a', '_blank');
  }

  handleFacebook() {
    window.open('https://www.facebook.com/evan.smalley', '_blank');
  }

  handleEmail() {
     window.open('mailto:evansmalley2@gmail.com', '_blank');
  }

	render() {
		return (
      <div className='me'>
        <div className='paper'>
          <h2 style={h2Style}>Evan Smalley </h2>
          <p>Hello, I am a software developer @ <a href='https://www.myhelo.com' target='_blank' rel='noreferrer'>myhELO</a>.</p>
          <p>Some quick things about me:</p>
          <ul>
            <li>Located in Carmel, Indiana</li>
            <li>Enjoy hiking with my wife and 2 dogs</li>
            <li>Purdue basketball</li>
            <li>Programming!</li>
          </ul>
          <p>I spend most my time in JS, PHP and mySQL, but also use C# and python.</p>
        </div>

        <div style={btnContainerStyle}>
          <button className='link-btn' onClick={this.handleGithub}>
            <span style={spanStyle}>Github</span>
            <GithubSVG width='20px' height='35px' />
          </button>
          <button className='link-btn' onClick={this.handleLinkedIn}>
            <span style={spanStyle}>LinkedIn</span>
            <LinkedInSVG width='20px' height='35px' />
          </button>
          <button className='link-btn' onClick={this.handleFacebook}>
            <span style={spanStyle}>Facebook</span>
            <FacebookSVG width='20px' height='35px' />
          </button>
          <button className='link-btn' onClick={this.handleEmail}>
            <span style={spanStyle}>Email</span>
            <EmailSVG width='20px' height='35px' />
          </button>
        </div>
      </div>
    );
	}
}

export default Me;

