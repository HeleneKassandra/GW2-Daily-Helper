import React from 'react';
import ImageZoom from 'react-medium-image-zoom';

const locationImgFinder = (props) => {

    function importAll(r) {
    let images = {};
      r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  };

  const images = importAll(require.context('../../assets/images/locations/', true, /\.(png|jpe?g|svg)$/));


  const image = props.path.length === 0 ? images['Applenook_NoImage.jpg'] : images[props.path];

  const imageZoomSettings = {
    src: image + "",
    alt: 'Image showing location around ' + props.waypoint,
    style: {
      width: "100%"
    }
  };

  return  <ImageZoom image={imageZoomSettings}/>
}

export default locationImgFinder;
