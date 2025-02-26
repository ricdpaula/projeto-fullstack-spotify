import React from "react";
import { Link } from "react-router-dom";

const SongItem = ({name, image, _id, audio, artist, duration, index}) => {
  return (
    <Link to={`/song/${_id}`}>
      <div className="song-item">
        <div className="song-item__number-album">
          <p>{index + 1}</p>
          <div className="song-item__album">
            <img
              className="song-item__image"
              src={image}
              alt={name}
            />
            <p className="song-item__name">{name}</p>
          </div>
        </div>
        <p>{duration}</p>
      </div>
    </Link>
  );
};

export default SongItem;
