import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from './Drums.css'

class Drums extends Component {
  constructor(props) {
    super(props);
    this.sounds = {
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
// function Drums() {
  // constructor(props) {
  //   super(props);

  //   this.audioHandler = React.createRef();
  //   this.onDrumClick = this.onDrumClick.bind(this);
  //   this.onKeyDown = this.onKeyDown.bind(this);
  //   this.onKeyUp = this.onKeyUp.bind(this);
  // }

  // onDrumClick() {
  //   const txt = this.props.padItem.id.replace(/-/g, ' ');
  //   const audioElm = this.audioHandler.current;

  //   this.props.updateTxt(txt);
  //   audioElm.currentTime = 0;
  //   audioElm.play();
  // }

  // onKeyDown(e) {
  //   const root = ReactDOM.findDOMNode(this);

  //   if (e.keyCode === this.props.padItem.keyCode) {
  //     root.classList.add('active');
  //     this.onDrumClick();
  //   }
  // }

  // onKeyUp(e) {
  //   const root = ReactDOM.findDOMNode(this);

  //   if(e.keyCode === this.props.padItem.keyCode) {
  //     setTimeout(() => {
  //       root.classList.remove('active');
  //     }, 33);
  //   }
  // }

  // componentDidUpdate() {
  //   this.audioHandler.current.volume = this.props.volumeValue / 100;
  // }

  // componentDidMount() {
  //   document.addEventListener('keydown', this.onKeyDown);
  //   document.addEventListener('keyup', this.onKeyUp);
  // }

  // componentWillUnmount() {
  //   document.addEventListener('keydown', this.onKeyDown);
  //   document.addEventListener('keyup', this.onKeyUp);
  // }

  render() {
    return (
      <div>
        <p>Q</p>
        <audio>
          <source src={this.sound} type='audio/mp3' />
        </audio>
        <p>{props.name}</p>
      </div>
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