import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Book Title 1", author: "Author 1", id: 1 },
    { title: "Book Title 2", author: "Author 2", id: 2 }
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid() }])
  }
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }
  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;