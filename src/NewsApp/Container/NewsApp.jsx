import React, { useState, useEffect } from 'react';
import { SearchNewsForm } from '../Components/SearchNewsForm';

export const NewsApp = () => {
  const [termTyped, setTermTyped] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const parseQueryParam = (queryParam) => {
    return queryParam.split(' ').filter(el => el !== "").join('+');
  };

  return (
    <div className="news__container">
      <SearchNewsForm
        setSearchTerm={setSearchTerm}
        setTermTyped={setTermTyped}
        termTyped={termTyped}
      />
    </div>
  )
}