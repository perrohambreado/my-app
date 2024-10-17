// src/app/api/nasa/route.js
export async function GET(req) {
    const NASA_API_KEY = process.env.NASA_API_KEY; // Asegúrate de tener la clave en tu archivo .env
    const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
  
    try {
      const response = await fetch(baseUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch image from NASA API');
      }
  
      const imageData = await response.json();
  
      return new Response(JSON.stringify(imageData), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
  