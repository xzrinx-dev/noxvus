exports.handler = async (event) => {
  const query = event.queryStringParameters?.query || '';
  if (!query) return { statusCode: 400, body: JSON.stringify({ error: 'query required' }) };

  try {
    const res = await fetch(`https://ikyyzyyrestapi.my.id/search/spotifyplay?query=${encodeURIComponent(query)}`);
    const data = await res.json();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
