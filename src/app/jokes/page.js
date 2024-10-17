// src/app/jokes/page.js
'use client';

import { useState } from 'react';

export default function JokePage() {
  const [category, setCategory] = useState('Any');
  const [type, setType] = useState('single');
  const [joke, setJoke] = useState('');
  const [error, setError] = useState('');

  const categories = ['Any', 'Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'];
  const types = ['single', 'twopart'];

  const fetchJoke = async () => {
    try {
      const response = await fetch(`/api/jokes?category=${category}&type=${type}`);
      const data = await response.json();
  
      if (data.error) {
        setError(data.error);
        setJoke('');
      } else {
        setError('');
        if (type === 'single') {
          setJoke(data.joke);
        } else {
          setJoke(`${data.setup} - ${data.delivery}`);
        }
      }
    } catch (err) {
      setError('Error fetching joke');
      setJoke('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Get a Random Joke</h1>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="category">Select Category: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginRight: '10px' }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label htmlFor="type">Select Type: </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {types.map((typ) => (
            <option key={typ} value={typ}>
              {typ === 'single' ? 'Single' : 'Two Part'}
            </option>
          ))}
        </select>
      </div>

      <button onClick={fetchJoke}>Get Joke</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {joke && <p style={{ marginTop: '20px', fontSize: '18px' }}>{joke}</p>}
    </div>
  );
}
