import React, { useState, useEffect } from 'react';
import { NewsTable } from '../Components/NewsTable';
import { SearchNewsForm } from '../Components/SearchNewsForm';
import { apiBaseUrl, apiKey } from '../consts';

export const NewsApp = () => {
  const [termTyped, setTermTyped] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);

  const parseQueryParam = (queryParam) => {
    return queryParam.split(' ').filter(el => el !== "").join('+');
  };

  useEffect(() => {
    searchTerm &&
      fetch(`${apiBaseUrl}?q=${parseQueryParam(searchTerm)}&pageSize=10&page=3&sortBy=publishedAt&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
  }, [searchTerm])

  return (
    <div className="news__container">
      <SearchNewsForm
        setSearchTerm={setSearchTerm}
        setTermTyped={setTermTyped}
        termTyped={termTyped}
      />
      <NewsTable articles={articles}/>
    </div>
  )
}