import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

export const Navbar = ({ title }) => {
  const history = useHistory();
  return (
    <>
      <div>{title}</div>
      <ul>
        <li>
          <button onClick={() => history.push("/")}>Home</button>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  match: PropTypes.string,
};

