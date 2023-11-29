// Column.js
import React, { useEffect, useRef, useState } from 'react';
import Image from './Image';

const Column = ({ title, images, className, handleScroll }) => {
  
  
  return (
    <div className={`cli-col cli-col${className}`}>
      <div className="cli-head" id={`cli-col${className}Header`}>
        <h3 class="cli-head3">{title}</h3>
      </div>
      <div className={`cli-content${className}`} >
        {images.map((image, index) => (
          <Image key={index} src={image} />
        ))}
      </div>
    </div>
  );
};

export default Column;
