// src/app/api/picsum/route.js
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const width = searchParams.get('width') || 600;  // Ancho por defecto
    const height = searchParams.get('height') || 400; // Alto por defecto
  
    // API de Lorem Picsum para obtener una imagen aleatoria
    const baseUrl = `https://picsum.photos/${width}/${height}`;
  
    try {
      // Redireccionamos directamente a la URL de la imagen
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