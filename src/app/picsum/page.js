// src/app/picsum/page.js
'use client';

import { useState } from 'react';

export default function PicsumPage() {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(400);
  const [imageUrl, setImageUrl] = useState('');

  const fetchRandomImage = async () => {
    try {
      const response = await fetch(`/api/picsum?width=${width}&height=${height}`);
      setImageUrl(response.url); // La API redirige a la imagen directamente
    } catch (err) {
      console.error('Error fetching image:', err);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Random Image from Lorem Picsum</h1>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            style={{ marginLeft: '10px', marginRight: '20px' }}
          />
        </label>

        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <button onClick={fetchRandomImage} style={{ marginBottom: '20px' }}>
        Get Random Image
      </button>

      {imageUrl && (
        <div>
          <img
            src={imageUrl}
            alt="Random from Lorem Picsum"
            style={{ width: `${width}px`, height: `${height}px` }}
          />
        </div>
      )}
    </div>
  );
}
