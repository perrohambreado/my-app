'use client';

import { useState, useEffect } from 'react';
import styles from '../page.module.css';

export default function NasaPage() {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setError(''); 
        setImageData(null); 
        console.log('Fetching new image data...');
        
        const response = await fetch(`/api/nasa?timestamp=${new Date().getTime()}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log('Fetched data from NASA API:', data); 

        if (data.error) {
          setError(data.error);
        } else {
          setImageData(data);
          console.log('Updated imageData state:', data); 
        }
      } catch (err) {
        console.error('Error fetching image:', err); 
        setError('Error fetching image from NASA API');
      }
    };

    fetchImage();
  }, []); 

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div
      key={imageData ? imageData.date : 'loading'}
      style={{
        background: 'rgba(255, 255, 255, 0.123)',
        padding: '20px',
        borderRadius: '50px 10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.10)',
        textAlign: 'center', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'column', 
        marginTop: '80px', 
        maxWidth: '900px',
        maxHeight: '600px',
        fontSize: '25px',
      }}
    >
      <h2
        style={{
          color: 'white',
          margin: '0px',
          marginBottom: '20px',
          fontFamily: 'Cormorant, serif',
          letterSpacing: '1px',
        }}
      >
        Astronomy Picture of the Day
      </h2>
      {imageData ? (
        <div>
          <h2
            style={{
              color: 'white',
              fontSize: '15px',
              margin: '0px',
              marginBottom: '20px',
              fontFamily: 'Cormorant, serif',
              letterSpacing: '2px',
            }}
          >
            {imageData.title}
          </h2>
          <p style={{ fontSize: '15px' }}>{imageData.date}</p>
          {imageData.media_type === 'image' ? (
            <img src={imageData.url} alt={imageData.title} style={{ maxWidth: '500px' }} />
          ) : (
            <iframe
              title={imageData.title}
              src={imageData.url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: '500px', height: '400px' }}
            />
          )}
          <p
            style={{
              fontFamily: 'Cormorant, serif',
              letterSpacing: '2px',
              fontSize: '15px',
              textAlign: 'center',
            }}
          >
            {imageData.explanation}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}