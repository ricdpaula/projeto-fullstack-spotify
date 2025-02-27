import axios from "axios";

const URL = "https://projeto-fullstack-spotify-backend.vercel.app";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
