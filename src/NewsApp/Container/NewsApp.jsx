import React, { useState, useEffect } from 'react';
import { NewsTable } from '../Components/NewsTable';
import { SearchNewsForm } from '../Components/SearchNewsForm';
import { NewsNavigation } from '../Components/NewsNavigation';
import { apiBaseUrl, apiKey } from '../consts';

export const NewsApp = () => {
  const [termTyped, setTermTyped] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalAmountOfArticles, setTotalAmountOfArticles] = useState(undefined);

  const parseQueryParam = (queryParam) => {
    return queryParam.split(' ').filter(el => el !== "").join('+');
  };

  useEffect(() => {
    searchTerm &&
      fetch(`${apiBaseUrl}?q=${parseQueryParam(searchTerm)}&pageSize=10&page=${page}&sortBy=publishedAt&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => {
          setArticles(data.articles);
          setTotalAmountOfArticles(data.totalResults);
        })
  }, [searchTerm, page])

  return (
    <div className="news__container">
      <SearchNewsForm
        setSearchTerm={setSearchTerm}
        setTermTyped={setTermTyped}
        termTyped={termTyped}
      />
      <NewsTable articles={articles}/>
      <NewsNavigation page={page} setPage={setPage} totalAmountOfArticles={totalAmountOfArticles} />
    </div>
  )
}