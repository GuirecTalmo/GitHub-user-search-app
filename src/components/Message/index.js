// == Import
import PropTypes from 'prop-types';
import React from 'react';
// on peut donner des alias à nos imports nommés pour éviter les conflits de nom

// == Composant
function Message({ message }) {
  return (
    <div className="cardMessage">
      <p>{ message }</p>
    </div>

  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  displayMessage: PropTypes.bool.isRequired,
};

// == Export
export default Message;
