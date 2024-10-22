import React from "react";
import { Link } from "react-router-dom";

const FooterLi = ({ footerLiText, to }) => {
  return (
    <li>
      <Link to={to} className="font-light text-sm opacity-90">
        {footerLiText}
      </Link>
    </li>
  );
};

export default FooterLi;
