import React from 'react';

export const SearchNewsForm = ({ setSearchTerm, setTermTyped, termTyped = '' }) => {

  const handleChange = evt => {
    setTermTyped(evt.target.value)
  }

  const handleSubmit = (evt) => {
    if (termTyped) {
      evt.preventDefault();
      setSearchTerm(termTyped);
      setTermTyped('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="form__input" onChange={handleChange} required autoFocus value={termTyped} placeholder="what news would you like to search ?" />
      <button type="submit" className="form__submit">Search News</button>
    </form>
  )
}