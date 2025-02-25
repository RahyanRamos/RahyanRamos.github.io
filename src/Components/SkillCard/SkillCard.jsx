import React from 'react';
import './SkillCard.css';

const SkillCard = ({ logo, name, description }) => {
  return (
    <div className="skill-card">
      <img src={logo} alt={name} className="skill-card__logo" />
      <h5 className="skill-card__name">{name}</h5>
      <p className="skill-card__description">{description}</p>
    </div>
  );
};

export default SkillCard;
