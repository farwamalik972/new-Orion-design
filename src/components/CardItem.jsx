import React from 'react';

const CardItem = ({ id, imageSrc, title, description }) => {
  return (
    <div className="card-item">
      <input id={id} type="checkbox" />
      <label className="toggle-btn" htmlFor={id}><span></span></label>
      <div className="toggle-content">
        <div className="image-wrapper">
          <img src={imageSrc} alt="random" />
        </div>
        <h2 className="header-wrapper">{title}</h2>
        <p className="body-wrapper">{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
