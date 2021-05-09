import React from "react";
import PropTypes from "prop-types";

const UserPage = () =>  {
  return(
    <>
      <div>User section!</div>
    </>
  );

};

UserPage.propTypes = {
  user: PropTypes.object,
};

export default UserPage;