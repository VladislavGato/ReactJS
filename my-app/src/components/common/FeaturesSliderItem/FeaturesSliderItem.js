import React from 'react';

function FeaturesSliderItem(props) {
  const { icon, text} = props;

  return (
    <div className="features-slider_item">
      <div className="features-img" style={{backgroundImage: `url(${icon})`}}></div>
      <div className="features-feature">{text}</div>
    </div>
  );
};

export default FeaturesSliderItem;
