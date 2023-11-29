// TeamSection.js
import React from 'react';
import Header from './Header';
import TeamMemberCard from './TeamMemberCard';
import './TeamSection.css';

// Import teamMembers from the separate data file
import { teamMembers } from './teamData';

const TeamSection = () => {
  return (
    <div className="team-mainblock team-con">
      <Header/>
      <div className="team-mainblock-ww">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            position={member.position}
            imgSrc={member.imgSrc}
            githubUrl={member.githubUrl}
            linkedinUrl={member.linkedinUrl}
            gmailUrl={member.gmailUrl}
          />
        ))}
      </div>
      <p className="Load">
        <a href="/">Load more</a>
      </p>
    </div>
  );
};

export default TeamSection;
