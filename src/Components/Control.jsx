// Control.js
import React from 'react';
import { makeStyles, Button, Slider } from '@material-ui/core';
import {
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  Fullscreen,
  VolumeUp
} from '@material-ui/icons';
import './Control.css';

const useStyles = makeStyles({
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    margin: '0 10px',
  },
  volumeSlider: {
    width: 100,
    marginLeft: 10,
  },
  timeDisplay: {
    marginLeft: 10,
  },
  pointsDisplay: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

const Control = ({
  playing,
  onPlayPause,
  onFastForward,
  onRewind,
  onFullscreen,
  volume,
  onVolumeChange,
  currentTime,
  duration,
  points,
}) => {
  const classes = useStyles();

  const formatTime = (seconds) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    const timeString = date.toISOString().substr(11, 8);
    return seconds >= 3600 ? timeString : timeString.substr(3, 5);
  };

  return (
    <div className={classes.controls}>
      <Button className={classes.button} onClick={onRewind}>
        <FastRewind />
      </Button>
      <Button className={classes.button} onClick={onPlayPause}>
        {playing ? <Pause /> : <PlayArrow />}
      </Button>
      <Button className={classes.button} onClick={onFastForward}>
        <FastForward />
      </Button>
      <Button className={classes.button} onClick={onFullscreen}>
        <Fullscreen />
      </Button>
      <VolumeUp />
      <Slider
        className={classes.volumeSlider}
        value={volume}
        onChange={onVolumeChange}
        min={0}
        max={1}
        step={0.01}
      />
      <div className={classes.timeDisplay}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
      <div className={classes.pointsDisplay}>
        Points: {points}
      </div>
    </div>
  );
};

export default Control;
