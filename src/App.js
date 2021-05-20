import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Map from './components/Map.js';
import ReactModal from 'react-modal';
import $ from 'jquery';
import './App.css';

// Data
import data from './data/data.js'

// Images
import logo2 from './images/logo2.png';
import loadingGIF from './images/loading.gif';
import startImg from './images/start.png';
import cover1 from './images/保腎護心網layout物件_06.png';
import cover1m from './images/保腎護心網layout手機物件_08.png';
import cover2 from './images/保腎護心網layout物件_07.png';
import cover3 from './images/保腎護心網layout物件_08.png';
import cover4 from './images/保腎護心網layout物件_09.png';
import cover4m from './images/保腎護心網layout手機物件_09.png';

import bgA from './images/保腎護心網layout物件V3_4.png';
import beforeC from './images/保腎護心網layout物件V3_4s.png';
import bgR from './images/保腎護心網layout物件V3_5.png';
import bgL from './images/保腎護心網layout物件V3_6.png';
import car1 from './images/car1.png';
import car2 from './images/car2.png';
import car3 from './images/保腎護心網layout物件_14.png';
import car4 from './images/保腎護心網layout物件_15.png';
import how1 from './images/保腎護心網layout物件V3_9.png';
import how2 from './images/保腎護心網layout物件V3_10.png';
import cause1 from './images/保腎護心網layout物件V3_12.png';
import cause2 from './images/保腎護心網layout物件V3_13.png';
import cause3 from './images/保腎護心網layout物件V3_14.png';
import know1 from './images/保腎護心網layout物件V3_22.png';
import know2 from './images/保腎護心網layout物件V3_23.png';
import know3 from './images/保腎護心網layout物件V3_24.png';
import know4 from './images/保腎護心網layout物件V3_25.png';
import factor1 from './images/保腎護心網layout物件V3_27.png';
import factor2 from './images/保腎護心網layout物件V3_28.png';
import factor3 from './images/保腎護心網layout物件V3_29.png';
import factor4 from './images/保腎護心網layout物件V3_30.png';
import factor5 from './images/保腎護心網layout物件V3_31.png';
import factor6 from './images/保腎護心網layout物件V3_32.png';
import factor7 from './images/保腎護心網layout物件V3_33.png';
import factor8 from './images/保腎護心網layout物件V3_34.png';
import qa1 from './images/保腎護心網layout物件V3_36.png';
import qa2 from './images/保腎護心網layout物件V3_37.png';
import qa3 from './images/保腎護心網layout物件V3_38.png';
import hand from './images/保腎護心網layout物件_52.png';
import an1m from './images/保腎護心網layout手機物件_44.png';
import an1 from './images/保腎護心網layout物件_53.png';
import an2 from './images/保腎護心網layout物件_54.png';
import an3 from './images/保腎護心網layout物件_55.png';

import man1 from './images/保腎1.png';
import man2 from './images/保腎2.png';
import man3 from './images/保腎3.png';
import man4 from './images/保腎4.png';
import man4c from './images/保腎護心網layout物件V3_262.png';
import man5 from './images/保腎5.png';
import man7 from './images/man7.png';
import man7c from './images/man7c.png';
import candies1 from './images/candies1.png';
import candies2 from './images/candies2.png';
import candies3 from './images/candies5.png';
import candies4 from './images/candies6.png';

import closeBtn from './images/保腎護心網layout物件_58.png';
import upBtn from './images/up.png';

const cData = data.content;
const causeImg = [cause1, cause2, cause3];
const knowImg = [know1, know2, know3, know4];
const factorImg = [factor1, factor2, factor3, factor4, factor5, factor6, factor7, factor8];
const qaImg = [qa1, qa2, qa3];



ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.4)';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      showModal: false,
      modal: 0
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (n) {
    this.setState({ showModal: true , modal: n});
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  componentDidMount(){

    $('#top').click(function(){
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }

  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }

  render(){
    const { width } = this.state;
    const isSmall = width <= 479;
    const isMobile = width <= 959;
    const isPad = width < 1200;
    const isLarge = width <= 1366;

    var goal = isLarge ? "calc(50% - 400px) bottom, calc(50% + 400px) bottom, calc(50% - 35vw) top, calc(50% + 37vw) top" : "left bottom, right bottom, -20px top, right top"

    // Cover
    var coverBG = {
      backgroundColor: "#C0D5FF",
      backgroundImage: isMobile ? "url("+cover2+"), url("+cover3+"), url("+cover1m+"), url("+cover4m+")":"url("+cover2+"), url("+cover3+"), url("+cover1+"), url("+cover4+")",
      backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
      backgroundSize: isMobile ? "60vw, 60vw, 50vw, 35vw":"contain, contain, 420px, 340px",
      backgroundPosition: isMobile ? "calc(50% - 40vw) bottom, calc(50% + 40vw) bottom, calc(50% - 40vw) calc(90% - 15vw), calc(50% + 40vw) calc(90% - 30vw)" : goal,
      paddingBottom: 0,
      // height: "490px"
    }

    var startBG = {
      backgroundImage: "url("+startImg+")",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: isMobile? "90px": "185px",
      height: isMobile? "70px": "135px",
      fontSize: isMobile? "16px" : "32px",
      fontWeight: "700",
      marginBottom: "-5rem"
    } 

    var carBG = {
      backgroundImage: isPad ? null : "url("+bgA+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "750px",
      backgroundPosition: "calc(50% - 40px) 60px",
    }

    // Modal
    const customStyles = {
      content : {
        borderRadius: '30px',
        border: '0px',
        color: "white",
        backgroundColor: "#6A7DCB",
        margin: "auto",
        padding: 0,
        inset: isSmall ? '16px':'50% 1rem auto',
        transform: isSmall ? 'none':'translateY(-50%)'
      }
    };

    const modalContent = {
      "title":[
        cData.qa["question"][0],
        cData.qa["question"][1],
        cData.qa["question"][2]
      ],
      "image":[
        isMobile? an1m:an1, an2, an3
      ],
      "content":[
        cData.qa["answercontent"][0],
        cData.qa["answercontent"][1],
        cData.qa["answercontent"][2]
      ]
    }

    // Bgs
    var bgCar1 = {
      backgroundImage: "url("+car1+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      maxWidth: '605px',
      height: '430px',
    }

    var bgCar2 = {
      backgroundImage: "url("+car2+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      maxWidth: '495px',
      height: '667px'
    }

    var bgCar3 = {
      backgroundImage: "url("+car3+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      height: '430px',
    }

    var bgCar4 = {
      backgroundImage: "url("+car4+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      height: '500px'
    }

    var bgWarning = {
      backgroundImage: "url("+man1+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: isMobile ? "center bottom" : "10% bottom",
      height: isMobile ? '170px':'300px'
    }

    var bgBats = {
      backgroundImage: isMobile ? "url("+man7c+")" : "url("+man7+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center bottom",
      height: isMobile ? '170px':'300px'
    }

    var bgNoWorry = {
      backgroundImage: isMobile ? "url("+man4+")":"url("+man4+"), url("+man4c+")",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundSize: "contain, 250px",
      backgroundPosition: isMobile ? "center bottom" : "10% bottom, 90% top",
      height: isMobile ? '170px':'300px'
    }

    var bgAnswer = {
      backgroundImage: "url("+man5+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: isMobile ? "center bottom" : "90% bottom",
      height: isMobile ? '170px':'300px'
    }

    var bgBanner = {
      backgroundImage: "url("+man2+"), url("+man3+")",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundSize: "contain, contain",
      backgroundPosition: isMobile ?  "calc(50% - 32vw) bottom, calc(50% + 32vw) bottom" : "calc(50% - 400px) bottom, calc(50% + 400px) bottom",
      height: isMobile ? '25vw':'360px',
      minHeight: '150px'
    }

    var logo2style = {
      width: isMobile? "17vw":"280px",
      minWidth: "100px"
    }

    var candies = [
      {
        top: "10%",
        left: "-110px",
        transform: "rotate(90deg)"
      },
      {
        top: "30%",
        right: "-80px",
        transform: "rotate(0deg)"
      },
      {
        top: "45%",
        right: "-90px",
        transform: "rotate(0deg)"
      },
      {
        top: "50%",
        left: "-60px",
        transform: "rotate(0deg)"
      },
      {
        top: "65%",
        left: "-120px",
        transform: "rotate(160deg)",
        zIndex: "-1"
      },
      {
        top: "80%",
        right: "-110px",
        transform: "rotate(-90deg)"
      }
    ]

    var bgC = {
      display: isPad ? "block":"none"
    }

    return (
      <main className="overflow-hidden">
        <div id="loading" className="flex items-center justify-center">
          <img src={loadingGIF} alt="Loading" width="100"/>
        </div>
        {/* Header */}
        <Header/>
        <div id="top" className="br-100 z-2">
          <img alt="Top" src={upBtn}/>
        </div>

        {/* Cover */}
        <section id="cover" className="pv0">
          <div className="container">
            <div className="pa2-l pa0 center tc bg-blue-2 brBox mh3" style={coverBG}>
              <h3 className="tc blue-1 lh-copy f32_ fw5 mt4-l mt0 pt0-l pt4 ph3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.cover["title"]}}></h3>
              <div className="bg-blue-1 br-100 mb0-l mb6 size250 center ph3 flex justify-center items-center">
                <h5 className="tc lh-copy white dib f24_ fw3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.cover["content"]}}></h5>
              </div>
              <div id="start" className="dib ph4-l ph2 pv2 black mt4" style={startBG}>
                <p className="mt3-l mt1">{cData.start}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="tc" style={bgC}>
          <img alt="line" className="db center" src={beforeC} width="52px" />
        </div>

        {/* Car */}
        <section id="car" style={carBG}>
          {
            (isPad) ? 
            (
              <div className="container tc">
                <div className="flex flex-column flex-row-l lh-copy">
                  <div className="pa3 car bg-white brBox mb5 mh3-l mh0">
                    <label className="f32 fw5 br3 dib mt3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][0]}}></label>
                    <h3 className="f50 pre-wrap mv2" dangerouslySetInnerHTML={{__html:cData.car["title"][0]}}></h3>
                    <p className="f32 ph4-m ph2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["content"][0]}}></p>
                    <div className="pa3 relative">
                      <img className="w-80-l w-100" src={car1} alt="car" />
                      <div className="quote carQ left top-0">
                        <h4 className="f24s bg-white brL fw4 absolute l60 b10 flex justify-center items-center pa4-l pv3 ph4-m ph3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][0]}}></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-column flex-row-l">
                  <div className="pa3 car bg-white brBox mh3-l mh0 lh-copy">
                    <label className="f32 fw5 br3 dib mt3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][1]}}></label>
                    <h3 className="f50 pre-wrap mv2" dangerouslySetInnerHTML={{__html:cData.car["title"][1]}}></h3>
                    <p className="f32 ph4-m ph2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["content"][1]}}></p>
                    <div className="pa3 relative">
                      <img className="w-80-l w-100" src={car2} alt="car" />
                      <div className="quote carQ right top-0">
                        <h4 className="f24s bg-white brL fw4 absolute r50 b20 flex justify-center items-center pa4-l pv3 ph4-m ph3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][1]}}></h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ):
            (
              <div className="container tc">
                <div className="flex flex-column flex-row-l">
                  <div className="flex-shrink w-100 w-50-l pl3 pr6 pv4 car" style={bgCar3}>
                    <label className="f24 fw5 br3 dib mt3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][0]}}></label>
                    <h3 className="pre-wrap f40 mv3" dangerouslySetInnerHTML={{__html:cData.car["title"][0]}}></h3>
                    <p className="lh-copy pre-wrap f24 mv0" dangerouslySetInnerHTML={{__html:cData.car["content"][0]}}></p>
                  </div>
                  <div className="w-100 w-50-l pa3 relative mh4 brBox" style={bgCar1}>
                    <div className="quote carQ left top-0">
                      <h4 className="bg-white fw5 f24 brL fw4 absolute l60 bottom-0 flex justify-center items-center ph4 pv3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][0]}}></h4>
                    </div>
                  </div>
                </div>
                <div className="h5 db-l dn"></div>
                <div className="flex flex-column-reverse flex-row-l">
                  <div className="w-100 w-50-l pa3 relative mh4 brBox" style={bgCar2}>
                    <div className="quote carQ right top-0">
                      <h4 className="bg-white fw5 f24 brL fw4 absolute r50 b20 flex justify-center items-center ph4 pv3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][1]}}></h4>
                    </div>
                  </div>
                  <div className="flex-shrink w-100 w-60-l pr3 pl6 pv4 car" style={bgCar4}>
                    <label className="f24 fw5 br3 dib mt3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][1]}}></label>
                    <h3 className="pre-wrap f40 mv3" dangerouslySetInnerHTML={{__html:cData.car["title"][1]}}></h3>
                    <p className="lh-copy pre-wrap f24 mv0" dangerouslySetInnerHTML={{__html:cData.car["content"][1]}}></p>
                  </div>
                </div>
              </div>
            )
          }
        </section>

        {/* How */}
        <section id="how" className="pv0">
          <div className="container bg-blue-3 ph4-l ph3 pt4 brBox pb0 mh3">
            <h2 className="title bg-blue-1 lh-copy pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["title"]}}></h2>
            <div className="center">
              {
                (isMobile) ? 
                (
                  <div className="cf mh6-l mh2 flex flex-row-l flex-column">
                    <div className="fl w-100 w-50-l pa2 ph5-m">
                      <div className="bg-white pa5-l pa4 brXL mr4-l h-100">
                        <img className="w-100" src={how1} alt="illustration" />
                      </div>
                      <div className="pa3-l pa0 tc">
                        <p className="f32 lh-copy pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["card1"]}}></p>
                        <div className="cf mb4 lh-copy">
                          <div className="f32 fw5 fl w-50 ph2-l">{cData.how["card1list"][0]}<br/>{cData.how["card1list"][1]}</div>
                          <div className="f32 fw5 fl w-50 ph2-l">{cData.how["card1list"][2]}<br/>{cData.how["card1list"][3]}</div>
                        </div>
                      </div>
                    </div>
                    <div className="fl w-100 w-50-l pa2 ph5-m">
                      <div className="bg-white pa0 brXL ml4-l">
                        <img className="db w-100" src={how2} alt="illustration" />
                      </div>
                      <div className="pa3 tc mb4">
                        <p className="f32 lh-copy pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["card2"]}}></p>
                      </div>
                    </div>
                  </div>
                ):
                (
                  <div className="cf mw-1200 mh2 flex flex-row-l flex-column">
                    <div className="fl w-100 w-50-l pa2">
                      <div className="f24 bg-white pa5-l pa4 brXL mr4-l h-100">
                        <img className="w-100" src={how1} alt="illustration" />
                        <p className="pre-wrap tc lh-copy" dangerouslySetInnerHTML={{__html:cData.how["card1"]}}></p>
                        <div className="cf fw5 lh-copy">
                          <div className="fl w-50 ph2-l">{cData.how["card1list"][0]}<br/>{cData.how["card1list"][1]}</div>
                          <div className="fl w-50 ph2-l">{cData.how["card1list"][2]}<br/>{cData.how["card1list"][3]}</div>
                        </div>
                      </div>
                    </div>
                    <div className="fl w-100 w-50-l pa2">
                      <div className="f24 bg-white pa5-l pa4 brXL ml4-l h-100">
                        <img className="w-100 bg-blue-4 brBox" src={how2} alt="illustration" />
                        <p className="pre-wrap tc lh-copy" dangerouslySetInnerHTML={{__html:cData.how["card2"]}}></p>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="quote left relative mt6" style={bgWarning}>
              <h4 className="mw-200 fw5 tc f24 lh-copy bg-white brL absolute l60 b10 flex justify-center items-center pv4-l ph5-l pa3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["quote"]}}></h4>
            </div>
          </div>
        </section>

        <div className={isMobile ? "divider ma0 pa0 o-0" : "divider ma0 pa0"}>
          <img className="db center" src={bgR} alt="line" width={isMobile ? "80":"450"}/>
        </div>

        {/* Cause */}
        <section id="cause" className="pv0">
          <div className="container bg-blue-3 ph4-l ph3 pt4 pb0 brBox mh3">
            <h2 className="pre-wrap title bg-blue-1 lh-copy" dangerouslySetInnerHTML={{__html:cData.cause["title"]}}></h2>
            <div className="center">
              {
                (isMobile) ? 
                (
                  <div className="cf tc">
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv3 mh4">
                        <img className="w-80" src={causeImg[0]} alt="illustration" />
                        <p className="pre-wrap flex flex-column mw-270 center f40 fw5 bg-blue-5 br4 pa3 white lh-copy"><span className="f24_ db">{cData.cause["top"][0]}</span>{cData.cause["content"][0]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv3 mh4">
                        <img className="w-80" src={causeImg[1]} alt="illustration" />
                        <p className="pre-wrap flex flex-column mw-270 center f40 fw5 bg-blue-5 br4 pa3 white lh-copy"><span className="f24_ db">{cData.cause["top"][1]}</span>{cData.cause["content"][1]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv3 mh4 mb5">
                        <img className="w-80" src={causeImg[2]} alt="illustration" />
                        <p className="pre-wrap flex flex-column mw-270 center f40 fw5 bg-blue-5 br4 pa3 white lh-copy"><span className="f24_ db">{cData.cause["top"][2]}</span>{cData.cause["content"][2]}</p>
                      </div>
                    </div>
                  </div>
                ):
                (
                  <div className="cf tc fw5">
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4-l mh5">
                        <img className="w-90" src={causeImg[0]} alt="illustration" />
                        <label className="f24 db bg-blue-1 br-100 white size100 center flex justify-center items-center">{cData.cause["top"][0]}</label>
                        <p className="mw-300 h160 mh0 f32 bg-blue-5 br4 pa4 white">{cData.cause["content"][0]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4-l mh5">
                        <img className="w-90" src={causeImg[1]} alt="illustration" />
                        <label className="f24 db bg-blue-1 br-100 white size100 center flex justify-center items-center">{cData.cause["top"][1]}</label>
                        <p className="mw-300 h160 mh0 f32 bg-blue-5 br4 pa4 white">{cData.cause["content"][1]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4-l mh5">
                        <img className="w-90" src={causeImg[2]} alt="illustration" />
                        <label className="f24 db bg-blue-1 br-100 white size100 center flex justify-center items-center">{cData.cause["top"][2]}</label>
                        <p className="mw-300 h160 mh0 f32 pre-wrap lh-copy bg-blue-5 br4 pa4 white">{cData.cause["content"][2]}</p>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="quote right relative mt4-l mt6" style={bgBats}>
              <h4 className="mw-200 fw5 tc f24 lh-copy bg-white brL absolute r45 b10 flex justify-center items-center pa4-l pa3 pre-wrap">{cData.cause["quote"]}</h4>
            </div>
          </div>
        </section>

        <div className={isMobile ? "divider ma0 pa0 o-0" : "divider ma0 pa0"}>
          <img className="db center" alt="line" src={bgL} width={isMobile ? "80":"450"}/>
        </div>

        {/* Knowledge */}
        <section id="knowledge" className="pv0">
          <div className="container bg-blue-4 ph4-l ph3 pt4 pb0 brBox mh3 relative">
            <img className="absolute db-l dn" src={candies3} width="185" style={candies[0]}  alt="illustration" />
            <img className="absolute db-l dn" src={candies1} width="155" style={candies[1]}  alt="illustration" />
            <img className="absolute db-l dn" src={candies2} width="110" style={candies[2]}  alt="illustration" />
            <img className="absolute db-l dn" src={candies1} width="110" style={candies[3]}  alt="illustration" />
            <img className="absolute db-l dn" src={candies2} width="155" style={candies[4]}  alt="illustration" />
            <img className="absolute db-l dn" src={candies4} width="185" style={candies[5]}  alt="illustration" />
            <h2 className="title bg-blue-2 pre-wrap lh-copy">{cData.knowledge["title"]}</h2>
            <div className="center tc lh-copy">
              <div className="cf mw-1200 mh2 flex flex-row-l flex-column">
                <div className="fl w-100 w-50-l pa2-l ph2 pv4">
                  <div className="bg-white pa5-l pa4 brXL mr4-l h-100">
                    <h3 className="pa3 tc bg-blue-5 brXL white f40_ fw5 mt0 mb4 mh4">{cData.knowledge["cardtitle"][0]}</h3>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent1"][0]}}></p>
                    <hr className="bw1 bg-blue-5 mv4 db-l dn"/>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent2"][0]}}></p>
                    <img className="w-100" src={knowImg[0]}  alt="illustration" />
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent3"][0]}}></p>
                    <hr className="bw1 bg-blue-5 mv4 db-l dn"/>
                    <img className="w-100" src={knowImg[1]}  alt="illustration" />
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent4"][0]}}></p>
                  </div>
                </div>
                <div className="fl w-100 w-50-l pa2-l ph2 pv4">
                  <div className="bg-white pa5-l pa4 brXL ml4-l h-100">
                    <h3 className="pa3 tc bg-blue-5 brXL white f40_ fw5 mt0 mb4 mh4">{cData.knowledge["cardtitle"][1]}</h3>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent1"][1]}}></p>
                    <hr className="bw1 bg-blue-5 mv4 db-l dn"/>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent2"][1]}}></p>
                    <img className="w-100" src={knowImg[2]}  alt="illustration" />
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent3"][1]}}></p>
                    <hr className="bw1 bg-blue-5 mv4 db-l dn"/>
                    <img className="w-100" src={knowImg[3]}  alt="illustration" />
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent4"][1]}}></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mh6-l mh2 pa2 mb6 mb0-l">
              {
                (isMobile) ? 
                (<h3 className="fw5 pv3 tc brXL white f32_ pre-wrap lh-copy mb6 ph5-m">{cData.knowledge["banner"]}</h3>):
                (<h3 className="fw5 pa4 tc bg-blue-3 brXL blue-1 f32_ fw5 lh-copy pre-wrap">{cData.knowledge["banner"]}</h3>)
              }
            </div>
            <div className="quote left relative mt6" style={bgNoWorry}>
              <h4 className="mw-200 f24 fw5 tc lh-copy bg-white brL absolute b40 l40 flex justify-center items-center pa4-l pa3 pre-wrap">{cData.knowledge["quote"]}</h4>
            </div>
          </div>
        </section>

        <div className={isMobile ? "divider ma0 pa0 o-0" : "divider ma0 pa0"}>
          <img className="db center" alt="line" src={bgR} width={isMobile ? "80":"450"}/>
        </div>

        {/* Factor */}
        <section id="factor" className="pv0">
          <div className="container bg-blue-3 ph4-l ph3 pt4 pb0 tc brBox mh3">
            <h2 className="title bg-blue-1 lh-copy">{cData.factor["title"]}</h2>
            <h3 className="mh5-l mh3 lh-copy mt5-l mt3 f32 fw5 db-l dn">{cData.factor["subtitle"]}</h3>
            <div className="flex flex-wrap mw-1200 mh2">
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[0]}  alt="illustration" />
                <label className="f32 fw5 mv3 db pre-wrap lh-copy">{cData.factor["factors"][0]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[1]}  alt="illustration" />
                <label className="f32 fw5 mv3 db pre-wrap lh-copy">{cData.factor["factors"][1]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[2]}  alt="illustration" />
                <label className="f32 fw5 mv3 db pre-wrap lh-copy">{cData.factor["factors"][2]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[3]}  alt="illustration" />
                <label className="f32 fw5 mv3 db pre-wrap lh-copy">{cData.factor["factors"][3]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[4]}  alt="illustration" />
                <label className="f32 fw5 mv3 db pre-wrap lh-copy">{cData.factor["factors"][4]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[5]}  alt="illustration" />
                <label className="f32 fw5 mv3 db pre-wrap lh-copy">{cData.factor["factors"][5]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[6]}  alt="illustration" />
                <label className="f32 fw5 mv3 db pre-wrap lh-copy">{cData.factor["factors"][6]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[7]}  alt="illustration" />
                <label className="f32 fw5 mv3 db pre-wrap lh-copy">{cData.factor["factors"][7]}</label>
              </div>
            </div>
            <div className="mh6-l mh2 pa2 mt4-l mt3 pb5 pb0-l lh-copy">
              {
                (isMobile) ? 
                (<h3 className="pa3 tc brL blue-1 f32_ pre-wrap">{cData.factor["banner"]}</h3>):
                (<h3 className="dib pv3 ph4 f32_ tc bg-white brL black pre-wrap">{cData.factor["banner"]}</h3>)
              }
            </div>
            <div className="quote right relative mt5-l mt6" style={bgAnswer}>
              <h4 className="fw5 f24 tc lh-copy bg-white brL absolute b40 r45 flex justify-center items-center pv4-l ph5-l pa3 pre-wrap" >{cData.factor["quote"]}</h4>
            </div>
          </div>
        </section>

        <div className={isMobile ? "divider ma0 pa0 o-0" : "divider ma0 pa0"}>
          <img className="db center" alt="line" src={bgL} width={isMobile ? "80":"450"}/>
        </div>

        {/* QA */}
        <section id="qa" className="pv0">
          <div className="container bg-blue-5 ph4-l ph3 pv4 brBox mh3">
            <h2 className="title bg-blue-3 mb5 lh-copy">{cData.qa["title"]}</h2>
              {
                (isMobile) ? 
                (
                <div className="flex flex-column mh5-l mh2">
                  <div className="w-100 pt2 pb4 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="f42 fw5 lh-copy db mt0 mr5 w-100 mb3 pre-wrap">{cData.qa["question"][0]}</p>
                      <div className="center dib w-100 bg-blue-3 brL">
                        <img className="dib ma0 w-50" src={qaImg[0]}  alt="illustration" />
                      </div>
                      <h3 className="fw5 pv2 tc bg-blue-4 brM white f40 dib ph4 mt3 mb0 cp" onClick={() => this.handleOpenModal(1)}>答案</h3>  
                    </div>
                  </div>
                  <div className="w-100 pt2 pb4 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="f42 fw5 lh-copy db mt0 mr5 w-100 mb3 pre-wrap">{cData.qa["question"][1]}</p>
                      <div className="center dib w-100 bg-blue-3 brL">
                        <img className="dib ma0 w-50" src={qaImg[1]}  alt="illustration" />
                      </div>
                      <h3 className="fw5 pv2 tc bg-blue-4 brM white f40 dib ph4 mt3 mb0 cp" onClick={() => this.handleOpenModal(2)}>答案</h3>  
                    </div>
                  </div>
                  <div className="w-100 pt2 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="f42 fw5 lh-copy db mt0 mr5 w-100 mb3 pre-wrap">{cData.qa["question"][2]}</p>
                      <div className="center dib w-100 bg-blue-3 brL">
                        <img className="dib ma0 w-50" src={qaImg[2]}  alt="illustration" />
                      </div>
                      <h3 className="fw5 pv2 tc bg-blue-4 brM white f40 dib ph4 mt3 mb0 cp" onClick={() => this.handleOpenModal(3)}>答案</h3>  
                    </div>
                  </div>
                  <ReactModal 
                     style={customStyles}
                     isOpen={this.state.showModal}
                     contentLabel="Minimal Modal Example"
                     onRequestClose={this.handleCloseModal}
                  >
                    <div className="tc">
                      <div className="ph4 pt5 pb0">
                        <h3 className="tc f42 fw5 lh-copy">{modalContent.title[this.state.modal-1]}</h3>
                        <p className="pre-wrap f32 mb0 lh-copy" dangerouslySetInnerHTML={{__html:modalContent.content[this.state.modal-1]}}></p>
                      </div>
                      <img  alt="illustration" className={this.state.modal === 1 ? "pb4 mw-300 mt3":"pb4"} src={modalContent.image[this.state.modal-1]}/>
                    </div>
                    <div className="close" onClick={this.handleCloseModal}><img alt="close" src={closeBtn}/></div>
                  </ReactModal>
                </div>
                ) : 
                (
                <div className="flex flex-column mh5-l mh2 relative">
                  <div className={"modal tc w-80 brXL absolute h-100 bg-white black ph5 pv4 "+this.state.showModal}>
                    <div className="overflow-y-hidden h-100">
                      <h3 className="f32 fw5">{modalContent.title[this.state.modal-1]}</h3>
                      <div className="bg-blue-3 pa0 br3">
                        <img className="db" alt="illustration" src={modalContent.image[this.state.modal-1]}/>
                      </div>
                      <p className="pre-wrap f24 lh-copy" dangerouslySetInnerHTML={{__html:modalContent.content[this.state.modal-1]}}></p>
                    </div>
                    <div className="close" onClick={this.handleCloseModal}>
                      <img alt="close" src={closeBtn}/>
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between items-center">
                    <div className="ma0 flex items-center w-100">
                      <img className="dib ma0 flex-shrink" src={qaImg[0]} height="190" alt="illustration" />
                      <p className="f32 fw5 dib mv0 mr5 bg-white brRight pa4 w-100 pre-wrap">{cData.qa["question"][0]}</p>
                    </div>
                    <div className="br-100 size190 bg-white pa2 overflow-hidden flex-shrink" onClick={() => this.handleOpenModal(1)}>
                      <img className="dib cp" src={hand} width="190" alt="illustration" />
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between items-center">
                    <div className="ma0 flex items-center w-100">
                      <img className="dib ma0 flex-shrink" src={qaImg[1]} height="190" alt="illustration" />
                      <p className="f32 fw5 dib mv0 mr5 bg-white brRight pa4 w-100 pre-wrap">{cData.qa["question"][1]}</p>
                    </div>
                    <div className="br-100 size190 bg-white pa2 overflow-hidden flex-shrink" onClick={() => this.handleOpenModal(2)}>
                      <img className="dib cp" src={hand} width="190" alt="illustration" />
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between items-center">
                    <div className="ma0 flex items-center w-100">
                      <img className="dib ma0 flex-shrink" src={qaImg[2]} height="190" alt="illustration" />
                      <p className="f32 fw5 dib mv0 mr5 bg-white brRight pa4 w-100 pre-wrap">{cData.qa["question"][2]}</p>
                    </div>
                    <div className="br-100 size190 bg-white pa2 overflow-hidden flex-shrink" onClick={() => this.handleOpenModal(3)}>
                      <img className="dib cp" src={hand} width="190" alt="illustration" />
                    </div>
                  </div>
                </div>
                )
              }
          </div>      
        </section>

        <div className={isMobile ? "divider ma0 pa0 o-0" : "divider ma0 pa0"}>
          <img className="db center" alt="line" src={bgR} width={isMobile ? "80":"450"}/>
        </div>

        {/* Map */}
        <Map/>

        {/* Banner */}
        <section id="banner" className="pb0">
          <div className="ma0">
            <h3 className={isMobile ? "container tc f32 fw5 lh-copy pb4 pre-wrap ph5-m" : "container tc fw5 f50 lh-copy pb4 pre-wrap"}>{cData.banner}</h3>
            <div className="relative" style={bgBanner}>
              <img className="db center o-0" src="https://fakeimg.pl/1000x360/" alt="illustration" />
              <img className="db center absolute left-0 right-0 bottom-0 pb4-l pb2" alt="logo" src={logo2} style={logo2style}/>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </main>
    )
  }
}

export default App;
