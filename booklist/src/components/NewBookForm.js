import React, {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext.js';

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="autho"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input
        type="submit"
        value="add book"
      />
    </form>
  )
}

export default NewBookForm;