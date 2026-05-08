import React from 'react';
import {ReactComponent as GithubSVG} from './svg/github.svg';
import {ReactComponent as FacebookSVG} from './svg/facebook.svg';
import {ReactComponent as LinkedInSVG} from './svg/linkedin.svg';
import {ReactComponent as EmailSVG} from './svg/email.svg';

import { Divider, Paper, Tile, Typography, useTheme } from '@esmalley/react-material-ui';

const Me = () => {

  const handleGithub = () => {
    window.open('https://www.github.com/esmalleydev', '_blank');
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/evan-smalley-31a55a3a/', '_blank');
  }

  const handleFacebook = () => {
    window.open('https://www.facebook.com/evan.smalley', '_blank');
  }

  const handleEmail = () => {
    window.open('mailto:evansmalley2@gmail.com', '_blank');
  }
  
  const theme = useTheme();

	return (
    <div className='me'>
      <Paper style = {{ padding: 20, marginBottom: 20 }}>
        <Typography type = 'h5' style = {{ textAlign: 'center' }}>Evan Smalley</Typography>
        <Typography type = 'body1'>Hello, I am a software engineer building <Typography type = 'a' href='https://srating.io' target='_blank' rel='noreferrer'>srating.io</Typography> in my spare time. Former software engineer @ <Typography type = 'a' href='https://www.myhelo.com' target='_blank' rel='noreferrer'>myhelo.com</Typography>.</Typography>
        <br />

        <Typography type = 'body1'>Check out my open source projects <Typography type = 'a' href='https://ux.srating.io/'>@esmalley/react-material-ui</Typography> package</Typography>
        <br />

        <Typography type = 'body1'>Some quick things about me:</Typography>
        <Typography type = 'body2'>- Located in Carmel, Indiana</Typography>
        <Typography type = 'body2'>- Enjoy hiking with my wife and 2 dogs</Typography>
        <Typography type = 'body2'>- Purdue basketball</Typography>
        <Typography type = 'body2'>- Programming!</Typography>
        
        <br />
        <Typography type = 'body1'>I spend most my time in TS/JS, Python, C#, PHP and mySQL.</Typography>
      </Paper>

      <Paper hover onClick={handleGithub} style = {{ cursor: 'pointer', padding: '5px 10px', marginBottom: 10 }}>
        <Tile
          primary='Github'
          secondary='https://www.github.com/esmalleydev'
          icon={<GithubSVG width='20px' height='35px' fill={theme.text.primary} style = {{ color: theme.text.primary }} />}
        />
      </Paper>

      <Paper hover onClick={handleLinkedIn} style = {{ cursor: 'pointer', padding: '5px 10px', marginBottom: 10 }}>
        <Tile
          primary='LinkedIn'
          secondary='https://www.linkedin.com/in/evan-smalley-31a55a3a/'
          icon={<LinkedInSVG width='20px' height='35px' fill={theme.text.primary} style = {{ color: theme.text.primary }} />}
        />
      </Paper>

      <Paper hover onClick={handleEmail} style = {{ cursor: 'pointer', padding: '5px 10px', marginBottom: 10 }}>
        <Tile
          primary='Email'
          secondary='evansmalley2@gmail.com'
          icon={<EmailSVG width='20px' height='35px' fill={theme.text.primary} style = {{ color: theme.text.primary }} />}
        />
      </Paper>
    </div>
  );
}

export default Me;

