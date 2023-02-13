import React, { Component } from "react"
import ReactAudioPlayer   from "react-audio-player"

class MediaComponent extends Component {
  
  render() {
    return (
      <div>
         <ReactAudioPlayer
        src="son.mp3"
        autoPlay
        controls
    />
      </div>
    );
  }
}
export default MediaComponent;