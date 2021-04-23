import React from "react";

const IconButton = ({ app }) => {
  const { img, href, alt, color, txt, name } = app;

  return (
    <a href={href} title={txt} onClick={null}>
      <img src={img} alt={alt} className="btn-icon" />
    </a>
  );
};

export default IconButton;
