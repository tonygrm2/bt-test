import React from 'react';

export const NewsList = ({ articles = [] }) => (
  <ul className="news-ul">
    {articles.map(({ author = '', title = '', content = ''}, i) => (
      <li className="news-li" key={i}>
        <p className="news-paragraph">{author}</p>
        <p className="news-paragraph">{title}</p>
        <p className="news-paragraph">{content}</p>
      </li>
    ))}
  </ul>
);

