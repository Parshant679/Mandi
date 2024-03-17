import React from "react";
import { Link } from "react-router-dom";
function LinkButtons({ path, title, reqClass }) {
  return (
    <Link to={path} className={reqClass}>
      {title}
    </Link>
  );
}

export default LinkButtons;
