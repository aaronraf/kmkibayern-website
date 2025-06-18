import React, { useState } from "react";
import PropTypes from "prop-types";

const DynamicImage = ({ folderPath, imageName, alt, className, style }) => {
  const [currentExtIndex, setCurrentExtIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  
  const extensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
  
  const handleImageError = () => {
    if (currentExtIndex < extensions.length - 1) {
      setCurrentExtIndex(currentExtIndex + 1);
    } else {
      setImageError(true);
    }
  };
  
  const handleImageLoad = () => {
    // Reset error state if image loads successfully
    setImageError(false);
  };
  
  if (imageError) {
    return (
      <div 
        className={`d-flex align-items-center justify-content-center bg-light ${className || ''}`} 
        style={{height: '200px', ...style}}
      >
        <span className="text-muted">No image found</span>
      </div>
    );
  }
  
  return (
    <img 
      src={`${folderPath}/${imageName}.${extensions[currentExtIndex]}`}
      alt={alt}
      className={className}
      style={style}
      onError={handleImageError}
      onLoad={handleImageLoad}
    />
  );
};

DynamicImage.propTypes = {
  folderPath: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

DynamicImage.defaultProps = {
  className: '',
  style: {},
};

export default DynamicImage;