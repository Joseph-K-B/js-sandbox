import { useState } from "react/cjs/react.development";

const sound = '';
// const clickSound = ('');

function DrumClickReducer(sounds, action) {
  // const [sound, setSound] = useState('')
  switch (action.type) {
    case 'C': {
      setSound(clap);
      // setSound(new Audio(clap));
      sounds.currentTime = 0;
      // sounds.play(new Audio(clap));
      sounds.play();
      break;
    }  
    case 'X': {
      setSound(crash);
      sounds.currentTime = 0;
      sounds.play();
      break;
    }
    case 'S': {
      setSound(hiHat);
      sounds.currentTime = 0;
      sounds.play();
      break;
    }
    case 'W': {
      setSound(kick);
      sounds.currentTime = 0;
      sounds.play();
      break;
    }
    case 'Q': {
      setSound(bass);
      sounds.currentTime = 0;
      sounds.play();
      break;
    }
    case 'E': {
      setSound(tom);
      sounds.currentTime = 0;
      sounds.play();
      break;
    }
    case 'A': {
      setSound(snare);
      sounds.currentTime = 0;
      sounds.play();
      break;
    }
    case 'D': {
      setSound(rideCymbal);
      sounds.currentTime = 0;
      sounds.play();
      break;
    }
    case 'Z': {
      setSound(tribal);
      sounds.currentTime = 0;
      sounds.play();
      break;
    }
    default:
      console.log('ya fucked up', sound);
      break;
  }
}

export default DrumClickReducer;