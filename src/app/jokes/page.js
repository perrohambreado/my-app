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
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.123)',
        padding: '50px',
        borderRadius: '50px 10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.10)',
        textAlign: 'center', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'column', 
        marginTop: '80px', 
        maxWidth: '600px', 
        fontSize: '25px',
      }}
    >
      <h1 style={{ color: '#ffffff', fontSize: '36px', textAlign: 'center' }}>Get a joke</h1>

      <div style={{ marginBottom: '20px', display: 'block', alignItems: 'center' }}>
        <label htmlFor="category" style={{ color: '#ffffff', marginRight: '10px', fontFamily: 'Cormorant, serif',
        letterSpacing: '2px', fontSize: '15px', textAlign: 'center', }}>Select Category: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            marginBottom: '10px',
            height: '40px', 
            padding: '0 10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontFamily: 'Cormorant, serif', 
            fontSize: '16px',
            fontFamily: 'Cormorant, serif',
            letterSpacing: '2px',
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label htmlFor="type" style={{ color: '#ffffff', marginRight: '10px', fontFamily: 'Cormorant, serif',
        letterSpacing: '2px', fontSize: '15px', textAlign: 'center', }}>Select Type: </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            height: '40px', 
            padding: '0 10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontFamily: 'Cormorant, serif', 
            fontSize: '16px',
            fontFamily: 'Cormorant, serif',
            letterSpacing: '1px',
          }}
        >
          {types.map((typ) => (
            <option key={typ} value={typ}>
              {typ === 'single' ? 'Single' : 'Two Part'}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={fetchJoke}
        style={{
          width: '100px',
          padding: '10px',
          border: 'none',
          borderRadius: '50px',
          background: '#dfdedc61', 
          color: '#fff', 
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '16px', 
          margin: '10px 0',
          transition: 'background 0.5s',
          fontFamily: 'Cormorant, serif',
          letterSpacing: '1px',
        }}
      >
        Get Joke
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {joke && <p style={{ marginTop: '20px', fontSize: '18px', color: '#ffffff' }}>{joke}</p>}
    </div>
  );
}
