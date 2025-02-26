import axios from 'axios';

const URL = "https://projeto-fullstack-spotify-backend.vercel.app/";

const responseArtists = await axios.get(`${URL}/artists`,{headers: {'Access-Control-Allow-Origin': '*'}})
const responseSongs = await axios.get(`${URL}/songs`,{headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization"}})

export const artistArray = responseArtists.data
export const songsArray = responseSongs.data
