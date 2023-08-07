import React, { useState } from 'react';
import PropTypes from 'prop-types'
import css from './SearchForm.module.css'

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
    <form onSubmit={handleFormSubmit} className={css.searchForm}>
      <input type="text" name="searchInput" className={css.searchInput} id="searchInput" required autoFocus onChange={(e) => setQuery(e.currentTarget.value)}/>
      <button type="submit" className={css.submitBtn}>Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}