import React from "react";
import BookCard from "./BookCard";
import "../homeCss/BookList.css";

const BookList = ({ title, books }) => {
  return (
    <section className="book-list-section">
      <h2>{title}</h2>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            price={book.price}
            rating={book.rating}
            image={book.image}
          />
        ))}
      </div>
    </section>
  );
};

export default BookList;
