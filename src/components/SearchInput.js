import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';

function SearchInput(props) {
  const { searchUser } = props;
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
    searchUser(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form__input"
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Search by user name..."
      />
    </form>
  );
}

SearchInput.propTypes = {
  searchUser: PropTypes.func,
};

export default SearchInput;
