import React from 'react';
import './MediaCard.css'; // Import your CSS file for styling

const MediaCard = ({ title, description, image }) => {
  return (
    <div className="media-card">
      <img src='https://i.pinimg.com/550x/d4/b3/db/d4b3db035bf1c825346da8b324635cd4.jpg' alt='doughnut' className="media-card-image" />
      <div className="media-card-content">
        <h2 className="media-card-title">Doughnut Mania</h2>
        <p className="media-card-description">Doughnuts really are a mans best freind , they look great and taste great !!</p>
      </div>
    </div>
  );
};

export default MediaCard;