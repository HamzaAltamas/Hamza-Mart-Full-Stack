import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item, className, href }) => {
  return (
    <li className={className}>
      <Link to={href}>{item}</Link>
    </li>
  );
};

export default ListItem;
