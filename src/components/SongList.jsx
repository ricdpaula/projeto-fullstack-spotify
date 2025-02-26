import React from "react";
import { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({songsArray}) => {
  const [items, setItems] = useState(5);
  return (
    <div className="song-list">
      {
      songsArray.filter((current, index)=>index < items).map((current, index)=>{
        return <SongItem {... current} index={index} key={index}/>
      })}

      <p className="song-list__see-more" onClick={()=>{setItems(items + 5)}}>Ver mais</p>
    </div>
  );
};

export default SongList;
