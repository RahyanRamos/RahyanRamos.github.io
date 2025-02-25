import React from 'react';
import './AcademicBackground.css';

const AcademicBackground = ({ name, location, startDate, endDate, tags = [] }) => {
  return (
    <div className="academic-background">
      <h4 className="academic-background__title">{name}</h4>
      <p className="academic-background__location">{location}</p>
      <p className="academic-background__period">{startDate} - {endDate}</p>
      {tags.length > 0 && (
        <div className="academic-background__tags">
          {tags.map((tag, index) => (
            <span key={index} className="academic-background__tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default AcademicBackground;