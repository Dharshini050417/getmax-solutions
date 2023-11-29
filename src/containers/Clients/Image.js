// Image.js
import React from 'react';

const Image = ({ src ,key}) => {
  return (
    <div className="cli-image" id={`cli-image${key}`}>
      <img className="cli-img" src={src} alt="Partner" />
    </div>
  );
};

export default Image;
