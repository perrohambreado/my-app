// src/app/nasa/page.js
'use client';

import { useState, useEffect } from 'react';

export default function NasaPage() {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('/api/nasa');
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          setImageData(data);
        }
      } catch (err) {
        setError('Error fetching image from NASA API');
      }
    };

    fetchImage();
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Astronomy Picture of the Day</h1>
      {imageData ? (
        <div>
          <h2>{imageData.title}</h2>
          <p>{imageData.date}</p>
          {imageData.media_type === 'image' ? (
            <img src={imageData.url} alt={imageData.title} style={{ maxWidth: '100%' }} />
          ) : (
            <iframe
              title={imageData.title}
              src={imageData.url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: '100%', height: '400px' }}
            />
          )}
          <p>{imageData.explanation}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
