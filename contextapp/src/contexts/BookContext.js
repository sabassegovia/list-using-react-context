import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'ABC', id: 1},
    {title: 'DEF', id: 2},
    {title: 'GHI', id: 3},
    {title: 'JKL', id: 4},

  ])
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  )
};

export default BookContextProvider;