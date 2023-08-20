// import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import fetch from 'isomorphic-fetch';

const app = express();
app.use(cors());

const DEEZER_API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com';

app.get('/search', async (req: express.Request, res: express.Response) => {
  const query = req.query.q as string;
  try {
    const headers = {
      'X-Requested-With': 'XMLHttpRequest',
    };

    const response = await fetch(`${DEEZER_API_URL}/search?q=${query}`, { headers });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Deezer API:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/artist/:id', async (req: express.Request, res: express.Response) => {
  const artistId = req.params.id;
  try {
    const headers = {
      'X-Requested-With': 'XMLHttpRequest',
    };

    // Fetch artist info
    const artistResponse = await fetch(`${DEEZER_API_URL}/artist/${artistId}`, { headers });
    const artistData = await artistResponse.json();

    // Fetch top tracks
    const topTracksResponse = await fetch(`${DEEZER_API_URL}/artist/${artistId}/top`, { headers });
    const topTracksData = await topTracksResponse.json();

    // Fetch albums
    const albumsResponse = await fetch(`${DEEZER_API_URL}/artist/${artistId}/albums`, { headers });
    const albumsData = await albumsResponse.json();

    res.json({
      artist: artistData,
      topTracks: topTracksData.data,
      albums: albumsData.data,
    });
  } catch (error) {
    console.error('Error fetching artist information:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// export const api = functions.https.onRequest(app);
