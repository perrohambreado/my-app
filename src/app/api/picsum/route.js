export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const width = searchParams.get('width') || 600;
    const height = searchParams.get('height') || 400;

    const baseUrl = `https://picsum.photos/${width}/${height}`;
  
    try {
      return Response.redirect(baseUrl, 302);
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
}