import React, { Component } from 'react';
import $ from 'jquery';
import bgl from '../images/footerBGL.png';
import bgr from '../images/footerBGR.png';


class Footer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  render(){
    var footerBG = {
      backgroundColor: "#204087",
      backgroundImage: "url("+bgr+"), url("+bgl+")",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundSize: "contain, contain",
      backgroundPosition: "top right, top left"
    }
    return (
      <footer className="bg-blue-2 pv5" style={footerBG}>
        <div className="container">
          <h1 className="white">Reference</h1>
          <ol className="white ma0 ph3">
            <li>aaa</li>
            <li>bbb</li>
            <li>bbb</li>
            <li>bbb</li>
            <li>bbb</li>
            <li>bbb</li>
            <li>bbb</li>
            <li>bbb</li>
            <li>bbb</li>
            <li>bbb</li>
            <li>bbb</li>
            <li>bbb</li>
          </ol>
        </div>
      </footer>
    )
  }
}

export default Footer;
