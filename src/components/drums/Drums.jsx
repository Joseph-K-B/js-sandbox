import React, { Component, useState } from 'react';
import clap from '../../../public/assets/sounds/clap-808.mp3';
import ReactDOM from 'react-dom';
import css from './Drums.css'

class Drums extends Component {
  // function Drums() {
  // const [sounds, setSounds] = useState(null)
  // const [drum, setDrum] = useState(null)
  constructor(props) {
    super(props);
    this.sounds = {
      clap: new Audio(clap),
      crash: new Audio(),
      hiHat: new Audio(),
      bassDrum: new Audio(),
      kickDrum: new Audio(),
      tribal: new Audio(),
      rideCymbal: new Audio(),
      snare: new Audio(),
      tom: new Audio(),
    };
    this.state = {
      clap: 'Clap',
      crash: 'Crash Cymbal',
      hiHat: 'Hi Hat Cymbal',
      bassDrum: 'Bass Drum',
      kickDrum: 'Kick Drum',
      tribal: 'Tribal Drum',
      rideCymbal: 'Ride Cymbal',
      snare: 'Snare Drum',
      tom: 'Tom Tom',
      default: 'click to make beats'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
  }

  handleClick(e) {
    const log = e;
    console.log(log);
    switch(e.currentTarget.childNodes[1].id) {
      case 'W':
        // W/ Hook
        // setSounds(kickDrum);
        // sounds.currentTime = 0;
        // sounds.play();
        this.sounds.kickDrum.currentTime = 0;
        this.setState({ default: this.state.kickDrum });
        this.sounds.kickDrum.play();
        break;
      case 'Q':
        this.sounds.bassDrum.currentTime = 0;
        this.setState({ default: this.state.bassDrum });
        this.sounds.bassDrum.play();
        break;
      case 'E':
        this.sounds.tom.currentTime = 0;
        this.setState({ default: this.state.tom });
        this.sounds.tom.play();
        break;
      case 'A':
        this.sounds.snare.currentTime = 0;
        this.setState({ default: this.state.snare });
        this.sounds.snare.play();
        break;
      case 'S':
        this.sounds.hiHat.currentTime = 0;
        this.setState({ default: this.state.hiHat });
        this.sounds.hiHat.play();
        break;
      case 'D':
        this.sounds.rideCymbal.currentTime = 0;
        this.setState({ default: this.state.rideCymbal });
        this.sounds.rideCymbal.play();
        break;
      case 'Z':
        this.sounds.tribal.currentTime = 0;
        this.setState({ default: this.state.tribal });
        this.sounds.tribal.play();
        break;
      case 'X':
        this.sounds.crash.currentTime = 0;
        this.setState({ default: this.state.crash });
        this.sounds.crash.play();
        break;
      case 'C':
        this.sounds.clap.currentTime = 0;
        this.setState({ default: this.state.clap });
        this.sounds.clap.play();
        break;
      default:
        console.log('ya fucked up');
        break;
    }

    console.dir(e.currentTarget);
  }

  handleKeys(keyCode) {
    switch(keyCode) {
      case 87:
        this.sounds.currentTime = 0;
        this.setState({ default: this.state.kickDrum });
        this.sounds.kickDrum.play();
        break;
      case 81:
        this.sounds.bassDrum.currentTime = 0;
        this.setState({ default: this.state.bassDrum });
        this.sounds.bassDrum.play();
        break;
      case 69:
        this.sounds.tom.currentTime = 0;
        this.setState({ default: this.state.tom });
        this.sounds.tom.play();
        break;
      case 65:
        this.sounds.snare.currentTime = 0;
        this.setState({ default: this.state.snare });
        this.sounds.snare.play();
        break;
      case 83:
        this.sounds.hiHat.currentTime = 0;
        this.setState({ default: this.state.hiHat });
        this.sounds.hiHat.play();
        break;
      case 68:
        this.sounds.rideCymbal.currentTime = 0;
        this.setState({ default: this.state.rideCymbal });
        this.sounds.rideCymbal.play();
        break;
      case 90:
        this.sounds.tribal.currentTime = 0;
        this.setState({ default: this.state.tribal });
        this.sounds.tribal.play();
        break;
      case 88:
        this.sounds.crash.currentTime = 0;
        this.setState({ default: this.state.crash });
        this.sounds.crash.play();
        break;
      case 67:
        this.sounds.clap.currentTime = 0;
        this.setState({ default: this.state.clap });
        this.sounds.clap.play();
        break;
      default:
        console.log('ya fucked up');      
    }
  }

  render() {
    return (      
      <>
      <div>
        <p>Q</p>
        <audio>
          <source src={this.sound} type='audio/mp3' />
        </audio>
        {/* <p>{props.name}</p> */}
      </div>
      <div
          id="drum-display"
          tabIndex={-1}
          onKeyDown={event => this.handleKeys(event.keyCode)} />
      <div className="drum-pad" id="clap" onClick={e => this.handleClick(e)}>
      <p>C</p>
      <audio className="clip" id="C" src={clap} type="audio/mp3" />
      <div className="drum-names">
        <p>Clap</p>
      </div>
      </div>
      </>
    )
    // const padItem = this.props.padItem
    // return (
    //   <div
    //     className={css.drumPad}
    //     id={padItem.id}
    //     onClick={this.onDrumClick}
    //   >
    //     <audio 
    //       className={css.audio}
    //       id={padItem.keyTrig}
    //       src={padItem.url}
    //       ref={this.audioHandler}
    //     />
    //     {padItem.keyTrig}
    //   </div>
    // )

  }

}

export default Drums;