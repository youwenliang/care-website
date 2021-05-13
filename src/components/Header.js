import React, { Component } from 'react';
import $ from 'jquery';
import bgl from '../images/headerBGL.png';
import bgr from '../images/headerBGR.png';
import bglm from '../images/保腎護心網layout手機物件_01.png';
import bgrm from '../images/保腎護心網layout手機物件_02.png';

import micl from '../images/保腎護心網layout手機物件_04.png';
import micr from '../images/保腎護心網layout手機物件_05.png';
import logo1 from '../images/logo1.png';

import startImg from '../images/start.png';
import cover1 from '../images/保腎護心網layout物件_06.png';
import cover1m from '../images/保腎護心網layout手機物件_08.png';
import cover2 from '../images/保腎護心網layout物件_07.png';
import cover3 from '../images/保腎護心網layout物件_08.png';
import cover4 from '../images/保腎護心網layout物件_09.png';
import cover4m from '../images/保腎護心網layout手機物件_09.png';



import data from '../data/data.js'
import loadImage from 'image-promise';

// Data
const cData = data.content;
const mData = data.map;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  componentDidMount(){
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();

    document.body.classList.add('ds');
    document.getElementById('loading').classList.remove('fade');

    // var images  = [];
    var images  = [bgl, bgr, bglm, bgrm, micl, micr, logo1, startImg, cover1, cover1m, cover2, cover3, cover4, cover4m];
    var loaded = false;
    
    loadImage(images)
    .then(function (allImgs) {
      console.log(allImgs.length, 'images loaded!', allImgs);
      loaded = true;

      setTimeout(function(){
        document.getElementById('loading').classList.add('fade');
        document.body.classList.remove('ds');
      },1200);
    })
    .catch(function (err) {
      console.error('One or more images have failed to load :(');
      console.error(err.errored);
      console.info('But these loaded fine:');
      console.info(err.loaded);
    });
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
    this.setState({ height: window.innerHeight });
  }

  render(){
    const { width, height } = this.state;
    const isSmall = width <= 600;
    const isMobile = width <= 959;
    const isLarge = width <= 1888;
    var goal0 = isSmall ? "calc(50% + 195px) top, calc(50% - 195px) top, calc(50% + 150px) 69%, calc(50% - 150px) 69%" : "right top, left top, calc(50% + 150px) 69%, calc(50% - 150px) 69%"
    var goal1 = isLarge ? "calc(50% + 750px) top, calc(50% - 750px) top, calc(50% + 360px) 37%, calc(50% - 360px) 37%" : "right top, left top, calc(50% + 360px) 37%, calc(50% - 360px) 37%"


    var headerBG = {
      height: isMobile ? "auto":"565px",
      backgroundColor: "#1C3073",
      backgroundImage: isMobile ? "url("+bgrm+"), url("+bglm+"), url("+micr+"), url("+micl+")":"url("+bgr+"), url("+bgl+"), url("+micr+"), url("+micl+")",
      backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
      backgroundSize: isMobile ? "contain, contain, 50px, 50px":"contain, contain, 136px, 136px",
      backgroundPosition: isMobile ? goal0 : goal1
    }
    var logoContainer = {
      borderRadius: "20px 20px 0 0",
      position: "absolute",
      bottom: isMobile ? 0:"210px",
      margin: "auto",
      transform: "translateX(-50%)"
    }

    return (
      <header className="center pt4 pb6-l pb5 relative" style={headerBG}>
        <h1 className="tc white f80 fw5 mt4 mb3 tracked" dangerouslySetInnerHTML={{__html:cData.header["title"]}}></h1>
        <h2 className="tc white f55 fw5 mv0 tracked">{cData.header["subtitle"]}</h2>
        <div id="logos" className="center w-100 tc">
          <div className="dib bg-white ma0 pa0" style={logoContainer}>
            <img className="ma2" src={logo1} width={isMobile ? "90":"200"}/>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
