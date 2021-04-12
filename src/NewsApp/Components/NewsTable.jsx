import React from 'react';

export const NewsTable = ({ articles = [] }) => {
  if (articles.length) return (
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Article</th>
        </tr>
      </tbody>
      <tbody>
        {console.log(articles)}
        {articles.map(({ title, author, content }, i) => {
          return (
            <tr key={i}>
              <td>{title}</td>
              <td>{author}</td>
              <td>{content}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
  return null;

}