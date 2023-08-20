"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const functions = __importStar(require("firebase-functions"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const DEEZER_API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com';
app.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        const headers = {
            'X-Requested-With': 'XMLHttpRequest',
        };
        const response = await (0, isomorphic_fetch_1.default)(`${DEEZER_API_URL}/search?q=${query}`, { headers });
        const data = await response.json();
        res.json(data);
    }
    catch (error) {
        console.error('Error fetching data from Deezer API:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});
app.get('/artist/:id', async (req, res) => {
    const artistId = req.params.id;
    try {
        const headers = {
            'X-Requested-With': 'XMLHttpRequest',
        };
        // Fetch artist info
        const artistResponse = await (0, isomorphic_fetch_1.default)(`${DEEZER_API_URL}/artist/${artistId}`, { headers });
        const artistData = await artistResponse.json();
        // Fetch top tracks
        const topTracksResponse = await (0, isomorphic_fetch_1.default)(`${DEEZER_API_URL}/artist/${artistId}/top`, { headers });
        const topTracksData = await topTracksResponse.json();
        // Fetch albums
        const albumsResponse = await (0, isomorphic_fetch_1.default)(`${DEEZER_API_URL}/artist/${artistId}/albums`, { headers });
        const albumsData = await albumsResponse.json();
        res.json({
            artist: artistData,
            topTracks: topTracksData.data,
            albums: albumsData.data,
        });
    }
    catch (error) {
        console.error('Error fetching artist information:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map