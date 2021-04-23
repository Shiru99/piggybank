import React from "react";

const logoutButton = ({ app }) => {
  const { img, href, alt, txt } = app;

  return (
    <a href={href} title={txt} onClick={null}>
      <img src={img} alt={alt} className="logout-icon" />
    </a>
  );
};

export default logoutButton;