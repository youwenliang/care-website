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
import startImg from './images/start.png';
import bgA from './images/保腎護心網layout物件V3_4.png';
import bgR from './images/保腎護心網layout物件V3_5.png';
import bgL from './images/保腎護心網layout物件V3_6.png';
import car1 from './images/car1.png';
import car2 from './images/car2.png';
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
      height: window.innerHeight,
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
    this.setState({ height: window.innerHeight });
  }

  render(){
    const { width, height } = this.state;
    const isMobile = width <= 959;
    var $t = this;

    // Cover
    var coverBG = {
      backgroundImage: "url(https://fakeimg.pl/800x600/)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      paddingBottom: 0,
    }

    var startBG = {
      backgroundImage: "url("+startImg+")",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: "185px",
      height: "135px",
      fontSize: "24px",
      fontWeight: "500",
      marginBottom: "-5rem"
    } 

    var carBG = {
      backgroundImage: "url("+bgA+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "750px",
      backgroundPosition: "calc(50% - 40px) 60px",
    }

    // Modal
    const customStyles = {
      content : {
        inset: '1rem',
        borderRadius: '30px',
        border: '0px',
        color: "white",
        backgroundColor: "#6A7DCB",
        margin: "auto",
        padding: 0
      }
    };

    const modalContent = {
      "title":[
        cData.qa["answertitle"][0],
        cData.qa["answertitle"][1],
        cData.qa["answertitle"][2]
      ],
      "image":[
        an1, an2, an3
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
      height: '474px',
    }

    var bgCar2 = {
      backgroundImage: "url("+car2+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: '899px'
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
      backgroundPosition: isMobile ? "center bottom" : "10% bottom, 80% top",
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
      backgroundPosition: isMobile ?  "calc(50% - 160px) bottom, calc(50% + 160px) bottom" : "calc(50% - 400px) bottom, calc(50% + 400px) bottom",
      height: isMobile ? '150px':'360px'
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

    return (
      <main className="overflow-hidden">
        {/* Header */}
        <Header/>
        <div id="top" className="br-100 z-1">
          <img src={upBtn}/>
        </div>

        {/* Cover */}
        <section id="cover" className="pv0">
          <div className="container">
            <div className="pa4 center tc bg-blue-2 brBox mh3" style={coverBG}>
              <h3 className="tc blue-1 lh-copy f3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.cover["title"]}}></h3>
              <div className="bg-blue-1 br-100 size250 center flex justify-center items-center">
                <h5 className="tc lh-copy white dib f4 normal pre-wrap" dangerouslySetInnerHTML={{__html:cData.cover["content"]}}></h5>
              </div>
              <div id="start" className="dib ph4 pv2 black mt4" style={startBG}>
                <p className="mt2 f2 fw7">{cData.start}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Car */}
        <section id="car" style={carBG}>
          {
            (isMobile) ? 
            (
              <div className="container tc">
                <div className="flex flex-column flex-row-l">
                  <div className="pa3 car bg-white brBox mb5 mh3-l mh0">
                    <label className="br3 dib mt3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][0]}}></label>
                    <h3 clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["title"][0]}}></h3>
                    <p clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["content"][0]}}></p>
                    <div className="pa3 relative">
                      <img className="w-100" src={car1}/>
                      <div className="quote carQ left top-0">
                        <h4 className="bg-white brBox absolute l60 b10 flex justify-center items-center pa4-l pa3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][0]}}></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-column flex-row-l">
                  <div className="pa3 car bg-white brBox mh3-l mh0">
                    <label className="br3 dib mt3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][1]}}></label>
                    <h3 clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["title"][1]}}></h3>
                    <p clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["content"][1]}}></p>
                    <div className="pa3 relative">
                      <img className="w-100" src={car2}/>
                      <div className="quote carQ right top-0">
                        <h4 className="bg-white brBox absolute r50 b30 flex justify-center items-center pa4-l pa3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][1]}}></h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ):
            (
              <div className="container tc">
                <div className="flex flex-column flex-row-l">
                  <div className="w-100 w-50-l pa3 car bg-white">
                    <label className="br3 dib mt3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][0]}}></label>
                    <h3 clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["title"][0]}}></h3>
                    <p clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["content"][0]}}></p>
                  </div>
                  <div className="w-100 w-50-l pa3 relative ma3 brBox" style={bgCar1}>
                    <div className="quote carQ left top-0">
                      <h4 className="bg-white brBox absolute l60 b10 flex justify-center items-center pa4-l pa3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][0]}}></h4>
                    </div>
                  </div>
                </div>
                <div className="flex flex-column-reverse flex-row-l">
                  <div className="w-100 w-50-l pa3 relative ma3 brBox" style={bgCar2}>
                    <div className="quote carQ right top-0">
                      <h4 className="bg-white brBox absolute r50 b30 flex justify-center items-center pa4-l pa3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][1]}}></h4>
                    </div>
                  </div>
                  <div className="w-100 w-50-l pa3 car bg-white">
                    <label className="br3 dib mt3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][1]}}></label>
                    <h3 clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["title"][1]}}></h3>
                    <p clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["content"][1]}}></p>
                  </div>
                </div>
              </div>
            )
          }
        </section>

        {/* How */}
        <section id="how" className="pv0">
          <div className="container bg-blue-3 ph4-l ph3 pt4 brBox pb0 mh3">
            <h2 className="title bg-blue-1 pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["title"]}}></h2>
            <div className="center">
              {
                (isMobile) ? 
                (
                  <div className="cf mh6-l mh2 flex flex-row-l flex-column">
                    <div className="fl w-100 w-50-l pa2">
                      <div className="bg-white pa5-l pa4 brBox mr4-l h-100">
                        <img className="w-100" src={how1}/>
                      </div>
                      <div className="pa4 tc">
                        <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["card1"]}}></p>
                        <div className="cf">
                          <div className="fl w-50 ph2-l">{cData.how["card1list"][0]}<br/>{cData.how["card1list"][1]}</div>
                          <div className="fl w-50 ph2-l">{cData.how["card1list"][2]}<br/>{cData.how["card1list"][3]}</div>
                        </div>
                      </div>
                    </div>
                    <div className="fl w-100 w-50-l pa2">
                      <div className="bg-white pa5-l pa4 brBox ml4-l">
                        <img className="w-100" src={how2}/>
                      </div>
                      <div className="pa4 tc">
                        <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["card2"]}}></p>
                      </div>
                    </div>
                  </div>
                ):
                (
                  <div className="cf mh6-l mh2 flex flex-row-l flex-column">
                    <div className="fl w-100 w-50-l pa2">
                      <div className="bg-white pa5-l pa4 brBox mr4-l h-100">
                        <img className="w-100" src={how1}/>
                        <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["card1"]}}></p>
                        <div className="cf">
                          <div className="fl w-50 ph2-l">{cData.how["card1list"][0]}<br/>{cData.how["card1list"][1]}</div>
                          <div className="fl w-50 ph2-l">{cData.how["card1list"][2]}<br/>{cData.how["card1list"][3]}</div>
                        </div>
                      </div>
                    </div>
                    <div className="fl w-100 w-50-l pa2">
                      <div className="bg-white pa5-l pa4 brBox ml4-l">
                        <img className="w-100" src={how2}/>
                        <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["card2"]}}></p>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="quote left relative mt6" style={bgWarning}>
              <h4 className="bg-white brBox absolute l60 b40 flex justify-center items-center pa4 pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["quote"]}}></h4>
            </div>
          </div>
        </section>

        <div className={isMobile ? "divider ma0 pa0 o-0" : "divider ma0 pa0"}>
          <img className="db center" src={bgR} width={isMobile ? "80":"450"}/>
        </div>

        {/* Cause */}
        <section id="cause" className="pv0">
          <div className="container bg-blue-3 ph4-l ph3 pt4 pb0 brBox mh3">
            <h2 className="title bg-blue-1" dangerouslySetInnerHTML={{__html:cData.cause["title"]}}></h2>
            <div className="center">
              {
                (isMobile) ? 
                (
                  <div className="cf tc">
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4-l mh5">
                        <img className="w-90" src={causeImg[0]}/>
                        <p className="bg-blue-5 br4 pa3 white lh-copy">{cData.cause["top"][0]}<br/>{cData.cause["content"][0]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4-l mh5">
                        <img className="w-90" src={causeImg[1]}/>
                        <p className="bg-blue-5 br4 pa3 white lh-copy">{cData.cause["top"][1]}<br/>{cData.cause["content"][1]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4-l mh5">
                        <img className="w-90" src={causeImg[2]}/>
                        <p className="bg-blue-5 br4 pa3 white lh-copy">{cData.cause["top"][2]}<br/>{cData.cause["content"][2]}</p>
                      </div>
                    </div>
                  </div>
                ):
                (
                  <div className="cf tc">
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4-l mh5">
                        <img className="w-90" src={causeImg[0]}/>
                        <label className="db bg-blue-1 br-100 white size100 center flex justify-center items-center">{cData.cause["top"][0]}</label>
                        <p className="bg-blue-5 br4 pa3 white">{cData.cause["content"][0]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4-l mh5">
                        <img className="w-90" src={causeImg[1]}/>
                        <label className="db bg-blue-1 br-100 white size100 center flex justify-center items-center">{cData.cause["top"][1]}</label>
                        <p className="bg-blue-5 br4 pa3 white">{cData.cause["content"][1]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4-l mh5">
                        <img className="w-90" src={causeImg[2]}/>
                        <label className="db bg-blue-1 br-100 white size100 center flex justify-center items-center">{cData.cause["top"][2]}</label>
                        <p className="bg-blue-5 br4 pa3 white">{cData.cause["content"][2]}</p>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="quote right relative mt6" style={bgBats}>
              <h4 className="bg-white brBox absolute r50 b40 flex justify-center items-center pa4 pre-wrap">{cData.cause["quote"]}</h4>
            </div>
          </div>
        </section>

        <div className={isMobile ? "divider ma0 pa0 o-0" : "divider ma0 pa0"}>
          <img className="db center" src={bgL} width={isMobile ? "80":"450"}/>
        </div>

        {/* Knowledge */}
        <section id="knowledge" className="pv0">
          <div className="container bg-blue-4 ph4-l ph3 pt4 pb0 brBox mh3 relative">
            <img className="absolute db-l dn" src={candies3} width="185" style={candies[0]}/>
            <img className="absolute db-l dn" src={candies1} width="155" style={candies[1]}/>
            <img className="absolute db-l dn" src={candies2} width="110" style={candies[2]}/>
            <img className="absolute db-l dn" src={candies1} width="110" style={candies[3]}/>
            <img className="absolute db-l dn" src={candies2} width="155" style={candies[4]}/>
            <img className="absolute db-l dn" src={candies4} width="185" style={candies[5]}/>
            <h2 className="title bg-blue-2">{cData.knowledge["title"]}</h2>
            <div className="center">
              <div className="cf mh6-l mh2 flex flex-row-l flex-column">
                <div className="fl w-100 w-50-l pa2">
                  <div className="bg-white pa5-l pa4 brBox mr4-l h-100">
                    <h3 className="pa3 tc bg-blue-5 br4 white f3 mv0 mh4">{cData.knowledge["cardtitle"][0]}</h3>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent1"][0]}}></p>
                    <img className="w-100" src={knowImg[0]}/>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent2"][0]}}></p>
                    <hr className="bw1 blue-4 mv4 db-l dn"/>
                    <img className="w-100" src={knowImg[1]}/>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent3"][0]}}></p>
                  </div>
                </div>
                <div className="fl w-100 w-50-l pa2">
                  <div className="bg-white pa5-l pa4 brBox ml4-l h-100">
                    <h3 className="pa3 tc bg-blue-5 br4 white f3 mv0 mh4">{cData.knowledge["cardtitle"][1]}</h3>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent1"][1]}}></p>
                    <img className="w-100" src={knowImg[2]}/>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent2"][1]}}></p>
                    <hr className="bw1 blue-4 mv4 db-l dn"/>
                    <img className="w-100" src={knowImg[3]}/>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent3"][1]}}></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mh6-l mh2 pa2">
              {
                (isMobile) ? 
                (<h3 className="pa4 tc br4 white f3 pre-wrap">{cData.knowledge["banner"]}</h3>):
                (<h3 className="pa4 tc bg-blue-3 br4 blue-1 f3 pre-wrap">{cData.knowledge["banner"]}</h3>)
              }
            </div>
            <div className="quote left relative mt6" style={bgNoWorry}>
              <h4 className="bg-white brBox absolute b40 l40 flex justify-center items-center pa4 pre-wrap">{cData.knowledge["quote"]}</h4>
            </div>
          </div>
        </section>

        <div className={isMobile ? "divider ma0 pa0 o-0" : "divider ma0 pa0"}>
          <img className="db center" src={bgR} width={isMobile ? "80":"450"}/>
        </div>

        {/* Factor */}
        <section id="factor" className="pv0">
          <div className="container bg-blue-3 ph4-l ph3 pt4 pb0 tc brBox mh3">
            <h2 className="title bg-blue-1">{cData.factor["title"]}</h2>
            <h3>{cData.factor["subtitle"]}</h3>
            <div className="flex flex-wrap mh6-l mh2">
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[0]}/>
                <label>{cData.factor["factors"][0]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[1]}/>
                <label>{cData.factor["factors"][1]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[2]}/>
                <label>{cData.factor["factors"][2]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[3]}/>
                <label>{cData.factor["factors"][3]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[4]}/>
                <label>{cData.factor["factors"][4]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[5]}/>
                <label>{cData.factor["factors"][5]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[6]}/>
                <label>{cData.factor["factors"][6]}</label>
              </div>
              <div className="w-25-l w-50 pa3-l pa2">
                <img className="w-90 db center" src={factorImg[7]}/>
                <label>{cData.factor["factors"][7]}</label>
              </div>
            </div>
            <div className="mh6-l mh2 pa2">
              {
                (isMobile) ? 
                (<h3 className="pa3 tc br4 blue-1 f3 pre-wrap">{cData.factor["banner"]}</h3>):
                (<h3 className="pa3 tc bg-white br4 black f3 pre-wrap">{cData.factor["banner"]}</h3>)
              }
            </div>
            <div className="quote right relative mt6" style={bgAnswer}>
              <h4 className="bg-white brBox absolute b40 r50 flex justify-center items-center pa4 pre-wrap" >{cData.factor["quote"]}</h4>
            </div>
          </div>
        </section>

        <div className={isMobile ? "divider ma0 pa0 o-0" : "divider ma0 pa0"}>
          <img className="db center" src={bgL} width={isMobile ? "80":"450"}/>
        </div>

        {/* QA */}
        <section id="qa" className="pv0">
          <div className="container bg-blue-5 ph4-l ph3 pv4 brBox mh3">
            <h2 className="title bg-blue-3 mb5">{cData.qa["title"]}</h2>
              {
                (isMobile) ? 
                (
                <div className="flex flex-column mh5-l mh2">
                  <div className="w-100 pt2 pb4 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="db mt0 mr5 w-100 mb3 pre-wrap">{cData.qa["question"][0]}</p>
                      <div className="center dib w-100 bg-blue-3 br4">
                        <img className="dib ma0 w-50" src={qaImg[0]}/>
                      </div>
                      <h3 className="pv2 tc bg-blue-4 br4 white f4 dib ph4 mt3 mb0 cp" onClick={() => this.handleOpenModal(1)}>答案</h3>  
                    </div>
                  </div>
                  <div className="w-100 pt2 pb4 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="db mt0 mr5 w-100 mb3 pre-wrap">{cData.qa["question"][1]}</p>
                      <div className="center dib w-100 bg-blue-3 br4">
                        <img className="dib ma0 w-50" src={qaImg[1]}/>
                      </div>
                      <h3 className="pv2 tc bg-blue-4 br4 white f4 dib ph4 mt3 mb0 cp" onClick={() => this.handleOpenModal(2)}>答案</h3>  
                    </div>
                  </div>
                  <div className="w-100 pt2 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="db mt0 mr5 w-100 mb3 pre-wrap">{cData.qa["question"][2]}</p>
                      <div className="center dib w-100 bg-blue-3 br4">
                        <img className="dib ma0 w-50" src={qaImg[2]}/>
                      </div>
                      <h3 className="pv2 tc bg-blue-4 br4 white f4 dib ph4 mt3 mb0 cp" onClick={() => this.handleOpenModal(3)}>答案</h3>  
                    </div>
                  </div>
                  <ReactModal 
                     style={customStyles}
                     isOpen={this.state.showModal}
                     contentLabel="Minimal Modal Example"
                     onRequestClose={this.handleCloseModal}
                  >
                    <div>
                      <div className="pa5">
                        <h3 className="tc">{modalContent.title[this.state.modal-1]}</h3>
                        <p>{modalContent.content[this.state.modal-1]}</p>
                      </div>
                      <img src={modalContent.image[this.state.modal-1]}/>
                    </div>
                    <div className="close" onClick={this.handleCloseModal}>x</div>
                  </ReactModal>
                </div>
                ) : 
                (
                <div className="flex flex-column mh5-l mh2 relative">
                  <div className={"modal w-80 brBox absolute h-100 bg-white black "+this.state.showModal}>
                    <div className="pa5">
                      <h3>{modalContent.title[this.state.modal-1]}</h3>
                      <div className="bg-blue-3 pa3 br3">
                        <img src={modalContent.image[this.state.modal-1]}/>
                      </div>
                      <p>{modalContent.content[this.state.modal-1]}</p>
                    </div>
                    <div className="close" onClick={this.handleCloseModal}>
                      <img src={closeBtn}/>
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between items-center">
                    <div className="ma0 flex items-center w-100">
                      <img className="dib ma0 flex-shrink" src={qaImg[0]} height="190"/>
                      <p className="dib mv0 mr5 bg-white brRight pa4 w-100 pre-wrap">{cData.qa["question"][0]}</p>
                    </div>
                    <div className="br-100 size190 bg-white pa2 overflow-hidden flex-shrink" onClick={() => this.handleOpenModal(1)}>
                      <img className="dib cp" src={hand} width="190"/>
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between items-center">
                    <div className="ma0 flex items-center w-100">
                      <img className="dib ma0 flex-shrink" src={qaImg[1]} height="190"/>
                      <p className="dib mv0 mr5 bg-white brRight pa4 w-100 pre-wrap">{cData.qa["question"][1]}</p>
                    </div>
                    <div className="br-100 size190 bg-white pa2 overflow-hidden flex-shrink" onClick={() => this.handleOpenModal(2)}>
                      <img className="dib cp" src={hand} width="190"/>
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between items-center">
                    <div className="ma0 flex items-center w-100">
                      <img className="dib ma0 flex-shrink" src={qaImg[2]} height="190"/>
                      <p className="dib mv0 mr5 bg-white brRight pa4 w-100 pre-wrap">{cData.qa["question"][2]}</p>
                    </div>
                    <div className="br-100 size190 bg-white pa2 overflow-hidden flex-shrink" onClick={() => this.handleOpenModal(3)}>
                      <img className="dib cp" src={hand} width="190"/>
                    </div>
                  </div>
                </div>
                )
              }
          </div>      
        </section>

        <div className={isMobile ? "divider ma0 pa0 o-0" : "divider ma0 pa0"}>
          <img className="db center" src={bgR} width={isMobile ? "80":"450"}/>
        </div>

        {/* Map */}
        <Map/>

        {/* Banner */}
        <section id="banner" className="pb0">
          <div className="ma0">
            <h3 className="container tc lh-copy f2 pb4 pre-wrap">{cData.banner}</h3>
            <div className="relative" style={bgBanner}>
              <img className="db center o-0" src="https://fakeimg.pl/1000x360/"/>
              <img className="db center absolute left-0 right-0 bottom-0 pb4-l pb2" src={logo2} width={isMobile? "100":"280"}/>
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
