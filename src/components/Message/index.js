// == Import
import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import { DarkModeContest } from '../../context';
import 'src/components/Card/styles.scss';
// on peut donner des alias à nos imports nommés pour éviter les conflits de nom

// == Composant
function Message({ message }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContest);
  return (
    <div className={darkMode ? `CardMessage theme--dark` : `CardMessage theme--light`}>
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
