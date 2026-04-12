export default async function handler(req, res) {
  const query = req.query.query || '';

  if (!query) {
    return res.status(400).json({ error: 'query required' });
  }

  try {
    const response = await fetch(
      `https://ikyyzyyrestapi.my.id/search/spotifyplay?query=${encodeURIComponent(query)}`
    );
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
