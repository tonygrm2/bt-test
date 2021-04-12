import React from 'react';
import { resultsLimit } from '../consts';

export const NewsNavigation = ({ page, setPage, totalAmountOfArticles }) => {
  const getAmountOfPages = (numberOfArticles) => {
    if (numberOfArticles > resultsLimit) return 10;
    return Math.ceil(numberOfArticles / 10);
  }
  const lastPageIndex = getAmountOfPages(totalAmountOfArticles);

  return (
    <div className="news-nav">
      <button disabled={page === 1} onClick={() => setPage(1)}>First</button>
      <button disabled={page === lastPageIndex} onClick={() => setPage(page + 1)}>Next</button>
      <button disabled={page === 1} onClick={() => { setPage(page - 1)}}>Previous</button>
      <button disabled={page === lastPageIndex} onClick={() => setPage(lastPageIndex)}>Last</button>
    </div>
  );
}