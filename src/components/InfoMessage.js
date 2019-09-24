import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';

function InfoMessage(props) {
  const { isLoading, isError } = props;
  if (isLoading) {
    return <Info infoText="Loading data..." />;
  }
  if (isError) {
    return <Info infoText="Something went wrong..." />;
  }
  return <Info infoText="No users to display..." />;
}

InfoMessage.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

export default InfoMessage;
