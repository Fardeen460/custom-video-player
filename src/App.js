import React, { useState, useRef } from 'react';
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import "./App.css";
import { Container } from "@mui/material";
import Control from './Components/Control';
import Header from './Components/Header';

function App() {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [points, setPoints] = useState(0);
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(playerContainerRef.current);
    }
  };

  const handleVolumeChange = (e, newValue) => {
    setVolume(newValue);
  };

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleEnded = () => {
    setPoints(points + 5);
  };

  return (
    <div className="video_container">
      <Header points={points} />
      <Container maxWidth="md" justify="center">
        <div className="player__wrapper" ref={playerContainerRef}>
          <ReactPlayer
            ref={playerRef}
            className="player"
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            width="100%"
            height="100%"
            playing={playing}
            volume={volume}
            muted={false}
            onProgress={handleProgress}
            onDuration={handleDuration}
            onEnded={handleEnded}
          />
          <Control 
            playing={playing} 
            onPlayPause={handlePlayPause}
            onFastForward={handleFastForward}
            onRewind={handleRewind}
            onFullscreen={handleFullscreen}
            volume={volume}
            onVolumeChange={handleVolumeChange}
            currentTime={currentTime}
            duration={duration}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
