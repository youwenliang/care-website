import React, { Component } from 'react';
import $ from 'jquery';
import bgl from '../images/headerBGL.png';
import bgr from '../images/headerBGR.png';

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
        <h1 className="tc white">糖尿病保腎護心網</h1>
        <div id="logos" className="center w-100 tc">
          <div className="dib bg-white ma0 pt2 ph2 pb0" style={logoContainer}>
            <img className="ma2" src="https://fakeimg.pl/120x40/"/>
            <img className="ma2" src="https://fakeimg.pl/120x40/"/>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
