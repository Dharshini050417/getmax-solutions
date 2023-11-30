// TeamMemberCard.js
import React from 'react';
import github_img from './Assets/github.jpeg';
import linkedin_img from './Assets/linkedin.jpeg';
import gmail_img from './Assets/gmail.jpeg';


const TeamMemberCard = ({ imgSrc, name, position, githubUrl, linkedinUrl, gmailUrl }) => {
  return (
    <div className="team-res-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-mainblock-con">
      <div className="mainblock">
        <div className="team-wrapper">
          <img className="team-image" src={imgSrc} alt={`${name}'s Photo`} />
        </div>
        <p className="team-head name">{name}</p>
        <p className="team-head position">{position}</p>
        <div className="social-icons">
          <a href={githubUrl} target="_blank">
            <img className="github-icon" src={github_img} alt="GitHub" />
          </a>
          <a href={linkedinUrl} target="_blank">
            <img className="linkedin-icon" src={linkedin_img} alt="LinkedIn" />
          </a>
          <a href={gmailUrl} target="_blank">
            <img className="gmail-icon" src={gmail_img} alt="Gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
