import React, {useState} from "react";
import './playerCurso.css';


/* FUNÇÃO QUE GERENCIA TODO O ESTADO DO PLAYER */
function userPlayerState(){

    const [playerState, setPlayerState] = useState({
        playing: false,
    });

    function toggleVideoPlay(){
        setPlayerState({
            ...playerState,
            playing:!playerState.playing,
        })

    }

    return{
        playerState,
        toggleVideoPlay
    }


}

/*O componente só recebe as coisas (estados) e realiza*/
const videoURL = "https://commandatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function PlayerCurso() {
    const {
        playerState,
        toggleVideoPlay
    } = userPlayerState();

    return (
        <div className="videoWrapper">
            <video
            src = {videoURL}
            poster ="https://img.youtube.com/vi/SMzOCxSWrrc/maxresdefault.jpg"
            />
            <div className="controls">
                <button onClick={toggleVideoPlay}>
                    { playerState.playing ? "Pause" : "Play" }
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                />
                <select>
                    {[1,2,3].map(speed => (
                        <option
                            key={`speedChange_${speed}`}
                        >
                            {speed}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    );
}