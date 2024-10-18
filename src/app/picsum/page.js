'use client';

import { useState } from 'react';

export default function PicsumPage() {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(400);
  const [imageUrl, setImageUrl] = useState('');

  const fetchRandomImage = async () => {
    try {
      const response = await fetch(`/api/picsum?width=${width}&height=${height}`);
      setImageUrl(response.url);
    } catch (err) {
      console.error('Error fetching image:', err);
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
      <h2 style={{color: 'white', margin: '0px', marginBottom: '20px', fontFamily: 'Comorant, serif', letterSpacing: '2px' }}>Lorem Picsum</h2>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
                color: 'rgb(255, 255, 255)',
                marginRight: '10px',
                fontFamily: 'Cormorant, serif',
                letterSpacing: '2px',
                fontSize: '15px',
                textAlign: 'center',
              }}>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            style={{
              width: '30%',
              height: '30px',
              padding: '10px',
              margin: '15px 10px',
              border: '1px solid #000000',
              borderRadius: '50px',
              background: '#DFDEDC', 
              color: '#000000',
              fontFamily: "'Cormorant', serif",
              letterSpacing: '2px',
              textAlign: 'center',
              outline: 'none',
            }}
          />
        </label>
            
        <label style={{
                color: 'rgb(255, 255, 255)',
                marginRight: '10px',
                fontFamily: 'Cormorant, serif',
                letterSpacing: '2px',
                fontSize: '15px',
                textAlign: 'center',
              }}>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{
              width: '30%',
              height: '30px',
              padding: '10px',
              margin: '15px 10px',
              border: '1px solid #000000', 
              borderRadius: '50px',
              background: '#DFDEDC', 
              color: '#000000',
              fontFamily: "'Cormorant', serif",
              letterSpacing: '2px',
              textAlign: 'center',
              outline: 'none',
            }}
          />
        </label>
      </div>

      <button onClick={fetchRandomImage} style={{
                width: '100px',
                padding: '10px',
                border: 'none',
                borderRadius: '50px',
                background: '#dfdedc61', 
                color: '#fff', 
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background 0.5s',
                margin: '10px 0',
                fontFamily: "'Cormorant', serif",
                letterSpacing: '1px',
              }}>
        Get image
      </button>

      {imageUrl && (
        <div>
          <img
            src={imageUrl}
            alt="Random from Lorem Picsum"
            style={{ width: `${width}px`, height: `${height}px`, margin: '20px', }}
          />
        </div>
      )}
    </div>
  );
}
