import React, { Component, useState } from 'react';
import clap from '../../../public/assets/sounds/clap-808.mp3';
import crash from '../../../public/assets/sounds/crash-noise.mp3';
import snare from '../../../public/assets/sounds/snare-block.mp3';
import hiHat from '../../../public/assets/sounds/hihat.mp3';
import bass from '../../../public/assets/sounds/kick-thump.mp3';
import kick from '../../../public/assets/sounds/kick-zapper.mp3';
import tribal from '../../../public/assets/sounds/perc-tribal.mp3';
import rideCymbal from '../../../public/assets/sounds/ride-acoustic02.mp3';
import tom from '../../../public/assets/sounds/tom-analog.mp3';

// class Drums extends Component {
function Drums() {
  const [sound, setSound] = useState(null);
  const sounds = (new Audio(sound));

  const handleClick = (e) => {    
    // const log = e;
    // console.log(log);
    switch(e.currentTarget.childNodes[1].id) {
      case 'C':
        sounds.currentTime = 0;
        setSound(clap);
        sounds.play(clap);
        break;
      case 'X':
        sounds.currentTime = 0;
        setSound(crash);
        sounds.play(crash);
        break;
      case 'S':
        sounds.currentTime = 0;
        setSound(hiHat);
        sounds.play(hiHat);
        break;
      case 'W':
        sounds.currentTime = 0;
        setSound(kick);
        sounds.play(kick);
        break;
      case 'Q':
        sounds.currentTime = 0;
        setSound(bass);
        sounds.play(bass);
        break;
      case 'E':
        sounds.currentTime = 0;
        setSound(tom);
        sounds.play(tom);
        break;
      case 'A':
        sounds.currentTime = 0;
        setSound(snare);
        sounds.play();
        break;
      case 'S':
        sounds.currentTime = 0;
        setSound(hiHat);
        sounds.play();
        break;
      case 'D':
        sounds.currentTime = 0;
        setSound(rideCymbal);
        sounds.play();
        break;
      case 'Z':
        sounds.currentTime = 0;
        setSound(tribal);
        sounds.play();
        break;
      default:
        console.log('ya fucked up');
        break;
    }

    // console.dir(e.currentTarget);
  }

  const handleKeys = (keyCode) => {
    switch(keyCode) {
      case 67:
        sounds.currentTime = 0;
        setSound(clap);
        sounds.play(clap);
        break;
      case 88:
        sounds.currentTime = 0;
        setSound(crash);
        sounds.play(crash);
        break;
      case 87:
        sounds.currentTime = 0;
        setSound(kick);
        sounds.play();
        break;
      case 81:
        sounds.currentTime = 0;
        setSound(bass);
        sounds.play(bass);
        break;
      case 69:
        sounds.currentTime = 0;
        setSound(tom);
        sounds.play();
        break;
      case 65:
        sounds.currentTime = 0;
        setSound(snare);
        sounds.play();
        break;
      case 83:
        sounds.currentTime = 0;
        setSound(hiHat);
        sounds.play();
        break;
      case 68:
        sounds.currentTime = 0;
        setSound(rideCymbal);
        sounds.play();
        break;
      case 90:
        sounds.currentTime = 0;
        setSound(tribal);
        sounds.play();
        break;
      default:
        console.log('ya fucked up');
        break;      
    }
  }

    return (      
      <>
      <div
          id="drum-display"
          tabIndex={-1}
          onKeyDown={e => handleKeys(e.keyCode)}>
        <div className="drum-pad" id="clap" onClick={e => handleClick(e)}>
          <p>C</p>
          <audio className="clip" id="C" src={clap} type="audio/mp3" />
          <div className="drum-names">
            <p>Clap</p>
          </div>
          </div>
        <div className="drum-pad" id="crash" onClick={e => handleClick(e)}>
          <p>X</p>
          <audio className="clip" id="X" src={crash} type="audio/mp3" />
          <div className="drum-names">
            <p>Crash</p>
            </div>
        </div>
        <div className="drum-pad" id="hiHat" onClick={e => handleClick(e)}>
          <p>S</p>
          <audio className="clip" id="S" src={hiHat} type="audio/mp3" />
          <div className="drum-names">
            <p>hiHat</p>
            </div>
        </div>
        <div className="drum-pad" id="snare" onClick={e => handleClick(e)}>
          <p>A</p>
          <audio className="clip" id="A" src={snare} type="audio/mp3" />
          <div className="drum-names">
            <p>Snare</p>
            </div>
        </div>
        <div className="drum-pad" id="bass" onClick={e => handleClick(e)}>
          <p>Q</p>
          <audio className="clip" id="Q" src={bass} type="audio/mp3" />
          <div className="drum-names">
            <p>Bass</p>
            </div>
        </div>
        <div className="drum-pad" id="kick" onClick={e => handleClick(e)}>
          <p>W</p>
          <audio className="clip" id="W" src={kick} type="audio/mp3" />
          <div className="drum-names">
            <p>Kick</p>
            </div>
        </div>
        <div className="drum-pad" id="tribal" onClick={e => handleClick(e)}>
          <p>Z</p>
          <audio className="clip" id="Z" src={tribal} type="audio/mp3" />
          <div className="drum-names">
            <p>Tribal</p>
            </div>
        </div>
        <div className="drum-pad" id="tribal" onClick={e => handleClick(e)}>
          <p>D</p>
          <audio className="clip" id="D" src={rideCymbal} type="audio/mp3" />
          <div className="drum-names">
            <p>Ride</p>
            </div>
        </div>
        <div className="drum-pad" id="tom" onClick={e => handleClick(e)}>
          <p>E</p>
          <audio className="clip" id="E" src={tom} type="audio/mp3" />
          <div className="drum-names">
            <p>Tom</p>
            </div>
        </div>
      </div>
      </>
    )
  }

// }

export default Drums;