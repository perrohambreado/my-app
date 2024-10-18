export async function GET(req) {
  const NASA_API_KEY = process.env.NASA_API_KEY;
  const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

  try {
    const response = await fetch(baseUrl);
    
    if (!response.ok) {
      console.error('Failed to fetch image:', response.status, response.statusText);
      throw new Error('Failed to fetch image from NASA API');
    }

    const imageData = await response.json();
    
    console.log('Fetched data:', imageData);
    
    return new Response(JSON.stringify(imageData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}