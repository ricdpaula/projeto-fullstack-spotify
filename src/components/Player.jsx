import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faCirclePause,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Player = ({
  duration,
  audio,
  randomIdFromArtist,
  randomIdFromArtist2,
}) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds - minutes * 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };
  const timeInSeconds = (timeSring) => {
    const splitArray = timeSring.split(":")
    const minutes = Number(splitArray[0])
    const seconds = Number(splitArray[1])

    return seconds + minutes * 60;
  }
  const progressBar = useRef();
  const audioPlay = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration)
  const playPause = () => {
    isPlaying ? audioPlay.current.pause() : audioPlay.current.play();
    setIsPlaying(!isPlaying);
  };
  useEffect(()=>{
    const intervalId = setInterval(() => {
      if(isPlaying)
      setCurrentTime(formatTime(audioPlay.current.currentTime));

      progressBar.current.style.setProperty("--_progress", (audioPlay.current.currentTime / durationInSeconds) * 100 + "%")
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [isPlaying])
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon
            className="player__icon"
            icon={faArrowAltCircleLeft}
          />
        </Link>
        <FontAwesomeIcon
          onClick={() => playPause()}
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
        />
        <Link to={`/song/${randomIdFromArtist2}`}>
          <FontAwesomeIcon
            className="player__icon"
            icon={faArrowAltCircleRight}
          />
        </Link>
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>
      <audio ref={audioPlay} src={audio}></audio>
    </div>
  );
};

export default Player;
