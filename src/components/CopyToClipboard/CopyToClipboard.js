import React from 'react';



const copyToClipboard = (props) => {
  const style = {
      color: "#666",
      cursor: "pointer",
      userSelect: "none"
    };

  return <strong className="resultItem--content-WaypointCode" style={style} data-clipboard-target={this} data-clipboard-text={props.WaypointCode}>{props.WaypointCode}</strong>;
}

export default copyToClipboard;
