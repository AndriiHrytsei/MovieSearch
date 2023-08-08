import PropTypes from 'prop-types';
import css from './SearchForm.module.css';
import { useSearchParams } from 'react-router-dom';

export default function SearchForm({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get("query")


  const handleFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSubmit(query);
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.searchForm}>
      <input
        type="text"
        name="searchInput"
        className={css.searchInput}
        id="searchInput"
        required
        autoFocus
        onChange={e => setSearchParams({ query: e.currentTarget.value })}
      />
      <button type="submit" className={css.submitBtn}>
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
