import React from "react";
import "../homeCss/BookCard.css";

const BookCard = ({ title, author, price, rating, image }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>by {author}</p>
      <p>${price}</p>
      <div className="rating">⭐ {rating}</div>
    </div>
  );
};

export default BookCard;
