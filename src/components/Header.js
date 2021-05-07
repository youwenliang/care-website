import React, { Component } from 'react';
import $ from 'jquery';
import bgl from '../images/headerBGL.png';
import bgr from '../images/headerBGR.png';
import micl from '../images/保腎護心網layout物件_04.png';
import micr from '../images/保腎護心網layout物件_05.png';
import logo1 from '../images/logo1.png';

import data from '../data/data.js'

// Data
const cData = data.content;
const mData = data.map;

class Header extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  render(){
    var headerBG = {
      height: "565px",
      backgroundColor: "#1C3073",
      backgroundImage: "url("+bgr+"), url("+bgl+"), url("+micr+"), url("+micl+")",
      backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
      backgroundSize: "contain, contain, 136px, 136px",
      backgroundPosition: "top right, top left, 73% 37%, 27% 37%"
    }
    var logoContainer = {
      borderRadius: "20px 20px 0 0",
      position: "absolute",
      bottom: "210px",
      margin: "auto",
      transform: "translateX(-50%)"
    }

    return (
      <header className="center pt4 pb6 relative" style={headerBG}>
        <h1 className="tc white f80 mt4 mb3 tracked">{cData.header["title"]}</h1>
        <h2 className="tc white f55 mv0 tracked">{cData.header["subtitle"]}</h2>
        <div id="logos" className="center w-100 tc">
          <div className="dib bg-white ma0 pa0" style={logoContainer}>
            <img className="ma2" src={logo1} width="200"/>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
