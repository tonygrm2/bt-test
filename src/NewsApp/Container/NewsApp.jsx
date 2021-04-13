import React, { useState, useEffect, Fragment } from 'react';
import { NewsList } from '../Components/NewsList';
import { SearchNewsForm } from '../Components/SearchNewsForm';
import { NewsNavigation } from '../Components/NewsNavigation';
import { Footer } from '../Components/Footer';

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
    <Fragment>
      <div className="news-container">
        <SearchNewsForm
          setSearchTerm={setSearchTerm}
          setTermTyped={setTermTyped}
          termTyped={termTyped}
        />
        {
          articles.length ? (
            <Fragment>
              <NewsList articles={articles}/>
              <NewsNavigation page={page} setPage={setPage} totalAmountOfArticles={totalAmountOfArticles} />
            </Fragment>
          ) : null
        }
      </div>
      <Footer />
    </Fragment>
  )
}