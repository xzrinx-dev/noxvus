export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'query required' });
  try {
    const r = await fetch(`https://ikyyzyyrestapi.my.id/search/spotifyplay?query=${encodeURIComponent(query)}`);
    const d = await r.json();
    return res.status(200).json(d);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
