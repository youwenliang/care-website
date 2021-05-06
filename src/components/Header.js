import React, { Component } from 'react';
import $ from 'jquery';
import bgl from '../images/headerBGL.png';
import bgr from '../images/headerBGR.png';
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
      backgroundColor: "#204087",
      backgroundImage: "url("+bgr+"), url("+bgl+")",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundSize: "contain, contain",
      backgroundPosition: "top right, top left"
    }
    var logoContainer = {
      borderRadius: "20px 20px 0 0"
    }

    return (
      <header className="center pt4 pb6" style={headerBG}>
        <h1 className="tc white f1">{cData.header["title"]}</h1>
        <h2 className="tc white f2">{cData.header["subtitle"]}</h2>
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
