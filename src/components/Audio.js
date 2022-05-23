import React, { useState, useEffect } from "react";

const Audio = () => {
  const [startCount, setStartCount] = useState(null);
  const [EndTime, setEndTime] = useState(null);
  const [nowWidth, setNowWidth] = useState(null);

  const audio = document.getElementById("music");

  /**
   *
   * Utility function
   * CONVERTs seconds TIME into Minutes: seconds
   */
  function conversion(value) {
    let minute = Math.floor(value / 60);
    minute = minute.toString().length === 1 ? "0" + minute : minute;
    let second = Math.round(value % 60);
    second = second.toString().length === 1 ? "0" + second : second;
    return `${minute}:${second}`;
  }

  /**
   * sets start time and dynamically rerender on play
   * Sets end time
   */
  if (audio) {
    audio.onloadedmetadata = () => {
      setEndTime(conversion(audio?.duration));
      setStartCount(conversion(audio?.currentTime));
    };
  }

  const handleProgressBarClick = (event) => {
    let coordStart = event.target.getBoundingClientRect().left;
    let coordEnd = event.pageX;
    let p = (coordEnd - coordStart) / event.target.offsetWidth;
    setNowWidth(p.toFixed(3) * 100 + "%");
    audio.currentTime = p.toFixed(3) * audio?.duration;
    audio.play();
  };

  useEffect(() => {
    const playing = setInterval(() => {
      setStartCount(conversion(audio?.currentTime));
      setNowWidth(
        (audio?.currentTime / audio?.duration.toFixed(3)) * 100 + "%"
      );
    }, 1000);

    return () => clearInterval(playing);
  }, [audio?.currentTime, audio?.duration]);

  return (
    <div className="audio-group">
      <audio id="music" style={{ height: "0", width: "0" }}>
        <source
          src="../William-McDowell-Falling-on-My-Knees.mp3"
          type="audio/mpeg"
        />
      </audio>
      <div className="progress">
        <div
          onClick={(e) => handleProgressBarClick(e)}
          className="progress-bar"
        >
          <div style={{ width: `${nowWidth}` }} className="now"></div>
        </div>
      </div>
      <span className="start">{startCount}</span>
      <span className="end">{`${EndTime || "--:--"}`}</span>
      <button onClick={() => audio.play()}>
        <img className="play" src="../play.png" alt="play" aria-label="play" />
      </button>
    </div>
  );
};

export default Audio;
