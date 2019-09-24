import React from 'react';
import PropTypes from 'prop-types';
import './Info.css';

function Info(props) {
  const { infoText } = props;
  return <div className="no-users-info">{infoText}</div>;
}

Info.propTypes = {
  infoText: PropTypes.string,
};

export default Info;
