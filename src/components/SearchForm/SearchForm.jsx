import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSubmit(query);
    setQuery('')
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="searchInput" id="searchInput" required autoFocus onChange={(e) => setQuery(e.currentTarget.value)}/>
      <button type="submit">Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}