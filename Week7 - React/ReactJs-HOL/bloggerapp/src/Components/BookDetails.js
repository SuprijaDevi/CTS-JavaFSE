import React from 'react';

const BookDetails = (props) => {
  return (
    <ul>
      {props.books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>Rs. {book.price}</h4>
        </div>
      ))}
    </ul>
  );
};

export default BookDetails;
