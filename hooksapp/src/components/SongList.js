import React, { useState, useEffect } from 'react';
import { v4 as uuid} from 'uuid';
import NewSongForm from '../components/NewSongForm.js'
function SongList() {
  const [songs, setSongs] = useState([
    {title: 'Almost Home', id: 1},
    {title: 'Memory Gospel', id: 2},
    {title: 'This Wild Darkness', id: 3},
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log('useEffect ran songs');
  }, [songs]);
  useEffect(() => {
    console.log('useEffect ran age');
  }, [age]);


  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return (
            <li key={song.id}>{song.title}</li>
          );
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
}

export default SongList;
