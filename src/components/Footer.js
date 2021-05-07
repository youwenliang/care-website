import React, { Component } from 'react';
import $ from 'jquery';
import bgl from '../images/footerBGL.png';
import bgr from '../images/footerBGR.png';

import data from '../data/data.js'

// Data
const cData = data.content;
const mData = data.map;

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  render(){
    var footerBG = {
      backgroundColor: "#1C3073",
      backgroundImage: "url("+bgr+"), url("+bgl+")",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundSize: "contain, contain",
      backgroundPosition: "top right, top left",
      fontSize: "12px",
      lineHeight: "22px"
    }
    return (
      <footer className="bg-blue-1 pv5" style={footerBG}>
        <div className="ph6-l ph2">
          <h1 className="white">{cData.footer["title"]}</h1>
          <ol className="white ma0 ph3 lh-copy">
            <li>{cData.footer["list"][0]}</li>
            <li>{cData.footer["list"][1]}</li>
            <li>{cData.footer["list"][2]}</li>
            <li>{cData.footer["list"][3]}</li>
            <li>{cData.footer["list"][4]}</li>
            <li>{cData.footer["list"][5]}</li>
            <li>{cData.footer["list"][6]}</li>
            <li>{cData.footer["list"][7]}</li>
            <li>{cData.footer["list"][8]}</li>
            <li>{cData.footer["list"][9]}</li>
            <li>{cData.footer["list"][10]}</li>
            <li>{cData.footer["list"][11]}</li>
            <li>{cData.footer["list"][12]}</li>
          </ol>
        </div>
      </footer>
    )
  }
}

export default Footer;
