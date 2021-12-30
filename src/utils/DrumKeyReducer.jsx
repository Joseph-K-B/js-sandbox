const sounds = (null)

const DrumKeysReducer = (keyCode) => {
  switch(keyCode) {
    case 67:
      // setSound(clap);
      const sound = (new Audio(clap))
      sounds.currentTime = 0;
      sounds.play(sound);
      // sounds.play(clap);
      break;
    case 88:
      setSound(crash);
      sounds.currentTime = 0;
      sounds.play();
      break;
    case 87:
      setSound(kick);
      sounds.currentTime = 0;
      sounds.play();
      break;
    case 81:
      setSound(bass);
      sounds.currentTime = 0;
      sounds.play();
      break;
    case 69:
      setSound(tom);
      sounds.currentTime = 0;
      sounds.play();
      break;
    case 65:
      setSound(snare);
      sounds.currentTime = 0;
      sounds.play();
      break;
    case 83:
      setSound(hiHat);
      sounds.currentTime = 0;
      sounds.play();
      break;
    case 68:
      setSound(rideCymbal);
      sounds.currentTime = 0;
      sounds.play();
      break;
    case 90:
      setSound(tribal);
      sounds.currentTime = 0;
      sounds.play();
      break;
    default:
      console.log('ya fucked up');
      break;      
  }
}

export default DrumKeysReducer;