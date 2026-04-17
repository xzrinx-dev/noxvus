export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  
  const { type, query, channel, url } = req.query;
  
  try {
    let apiUrl = '';
    
    if (type === 'spotify' || !type) {
      // Music search
      apiUrl = `https://api.botcahx.eu.org/search/spotify?query=${encodeURIComponent(query)}&apikey=PA25Bupl`;
    } else if (type === 'jadwaltv') {
      // Jadwal TV
      apiUrl = `https://api.siputzx.my.id/api/info/jadwaltv?channel=${channel}`;
    } else if (type === 'berita') {
      // Berita
      apiUrl = `https://api.siputzx.my.id/api/berita/cnbcindonesia`;
    } else if (type === 'tiktok') {
      // TikTok downloader
      apiUrl = `https://api.siputzx.my.id/api/d/tiktok/v2?url=${encodeURIComponent(url)}&apikey=PA25Bupl`;
    }
    
    if (!apiUrl) return res.status(400).json({ error: 'Invalid type' });
    
    const r = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const text = await r.text();
    const d = JSON.parse(text);
    return res.status(200).json(d);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
