// src/app/api/jokes/route.js
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || 'Any';
    const type = searchParams.get('type') || 'single';
  
    try {
      const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=${type}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch joke from JokeAPI');
      }
  
      const jokeData = await response.json();
  
      return new Response(JSON.stringify(jokeData), {
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
  