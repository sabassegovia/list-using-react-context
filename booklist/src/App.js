import React from 'react';
import BookContextProvider from './contexts/BookContext.js';
import Navbar from './components/Navbar.js';
import BookList from './components/BookList.js';
import NewBookForm from './components/NewBookForm.js';
// import BookList from './components/BookList.js';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm/>
     </BookContextProvider>
    </div>
  );
}

export default App;
