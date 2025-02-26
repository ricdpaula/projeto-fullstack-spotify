import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists"

const Song = () => {
  const {id} = useParams();

  // Maneiras de declarar const e puxar as mesmas informações
  // const songObj ou {acessar diretamente o objeto como o exemplo abaixo} = songsArray.filter((current)=>current.id === Number(id))[0];
  const {image, name, artist, duration, audio} = songsArray.filter((current)=>current._id === id)[0];
  const artistSong = artistArray.filter((current)=>current.name === artist)[0];
  
  const songsFromArtist = songsArray.filter((current)=>current.artist === artist)


  const randomIndex = Math.floor(Math.random() * (songsFromArtist.length - 1));
  const randomIdFromArtist = songsFromArtist[randomIndex]._id;
  const randomIdFromArtist2 = songsFromArtist[randomIndex]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src={image}
            alt={name}
          />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <Link to={`/artist/${artistSong.id}`}>
            <img
              width={75}
              height={75}
              src={artistSong.image}
              alt={artistSong.name}
            />
          </Link>
        </div>
        <Player duration={duration} audio={audio} randomIdFromArtist={randomIdFromArtist} randomIdFromArtist2={randomIdFromArtist2}/>
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
