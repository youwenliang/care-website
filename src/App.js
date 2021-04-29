import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ReactModal from 'react-modal';
import $ from 'jquery';
import './App.css';
import data from './data/data.js'

// Data
const cData = data.content;
const mData = data.map;

// Images
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

    // Cover
    var coverBG = {
      backgroundImage: "url(https://fakeimg.pl/800x600/)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      paddingBottom: 0,
    }

    var startBG = {
      fontSize: "24px",
      fontWeight: "500",
      marginBottom: "-5rem"
    } 

    // Modal
    const customStyles = {
      content : {
        borderRadius: '30px',
        border: '0px',
        inset: '20px',
        color: "white",
        backgroundColor: "#6A7DCB"
      }
    };

    const modalContent = {
      "title":[
        cData.qa["answertitle"][0],
        cData.qa["answertitle"][1],
        cData.qa["answertitle"][2]
      ],
      "image":[
        "https://fakeimg.pl/800x200/","https://fakeimg.pl/800x200/","https://fakeimg.pl/800x200/"
      ],
      "content":[
        cData.qa["answercontent"][0],
        cData.qa["answercontent"][1],
        cData.qa["answercontent"][2]
      ]
    }

    // Bgs
    var bgCar1 = {
      backgroundImage: "url(https://fakeimg.pl/800x600/)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: '300px',
    }

    var bgCar2 = {
      backgroundImage: "url(https://fakeimg.pl/800x600/)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: '300px'
    }

    var bgWarning = {
      backgroundImage: "url(https://fakeimg.pl/800x600/)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      height: '300px'
    }

    var bgBats = {
      backgroundImage: "url(https://fakeimg.pl/800x600/)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: '300px'
    }

    var bgNoWorry = {
      backgroundImage: "url(https://fakeimg.pl/800x600/)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: '300px'
    }

    var bgAnswer = {
      backgroundImage: "url(https://fakeimg.pl/800x600/)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: '300px'
    }

    return (
      <main>
        {/* Header */}
        <Header/>
        <div id="top" className="br-100"></div>

        {/* Cover */}
        <section id="cover" className="pv0">
          <div className="container">
            <div className="pa4 center tc bg-blue-2 brBox" style={coverBG}>
              <h2 className="tc blue-1 lh-copy f3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.cover["title"]}}></h2>
              <div className="bg-blue-1 br-100 size250 center flex justify-center items-center">
                <h5 className="tc lh-copy white dib f4 normal pre-wrap" dangerouslySetInnerHTML={{__html:cData.cover["content"]}}></h5>
              </div>
              <div id="start" className="bg-white dib ph4 pv2 black mt4" style={startBG}>開始</div>
            </div>
          </div>
        </section>

        {/* Car */}
        <section id="car">
          {
            (isMobile) ? 
            (
              <div className="container">
                <div className="flex flex-column flex-row-l">
                  <div className="pa3 car bg-white brBox mb5 mh3">
                    <label className="br3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][0]}}></label>
                    <h3 clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["title"][0]}}></h3>
                    <p clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["content"][0]}}></p>
                    <div className="pa3 relative">
                      <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                      <div className="quote absolute top-0">
                        <h4 clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][0]}}></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-column flex-row-l">
                  <div className="pa3 car bg-white brBox mh3">
                    <label className="br3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][1]}}></label>
                    <h3 clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["title"][1]}}></h3>
                    <p clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["content"][1]}}></p>
                    <div className="pa3 relative">
                      <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                      <div className="quote absolute top-0">
                        <h4 clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][1]}}></h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ):
            (
              <div className="container">
                <div className="flex flex-column flex-row-l">
                  <div className="w-100 w-50-l pa3 car bg-white">
                    <label className="br3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][0]}}></label>
                    <h3 clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["title"][0]}}></h3>
                    <p clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["content"][0]}}></p>
                  </div>
                  <div className="w-100 w-50-l pa3 relative ma3 brBox" style={bgCar1}>
                    <div className="quote absolute top-0">
                      <h4 clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][0]}}></h4>
                    </div>
                  </div>
                </div>
                <div className="flex flex-column-reverse flex-row-l">
                  <div className="w-100 w-50-l pa3 relative ma3 brBox" style={bgCar2}>
                    <div className="quote absolute top-0">
                      <h4 clasasName="pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["quote"][1]}}></h4>
                    </div>
                  </div>
                  <div className="w-100 w-50-l pa3 car bg-white">
                    <label className="br3 bg-blue-1 white pa2 pre-wrap" dangerouslySetInnerHTML={{__html:cData.car["clue"][1]}}></label>
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
          <div className="container bg-blue-3 pa4 brBox pb0">
            <h2 className="title bg-blue-1 pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["title"]}}></h2>
            <div className="center">
              {
                (isMobile) ? 
                (
                  <div className="cf mh5-l mh2 flex flex-row-l flex-column">
                    <div className="fl w-100 w-50-l pa2">
                      <div className="bg-white pa4 brBox mr4-l h-100">
                        <img className="w-100" src="https://fakeimg.pl/100x100/"/>
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
                      <div className="bg-white pa4 brBox ml4-l">
                        <img className="w-100" src="https://fakeimg.pl/100x150/"/>
                      </div>
                      <div className="pa4 tc">
                        <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["card2"]}}></p>
                      </div>
                    </div>
                  </div>
                ):
                (
                  <div className="cf mh5-l mh2 flex flex-row-l flex-column">
                    <div className="fl w-100 w-50-l pa2">
                      <div className="bg-white pa4 brBox mr4-l h-100">
                        <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                        <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["card1"]}}></p>
                        <div className="cf">
                          <div className="fl w-50 ph2-l">{cData.how["card1list"][0]}<br/>{cData.how["card1list"][1]}</div>
                          <div className="fl w-50 ph2-l">{cData.how["card1list"][2]}<br/>{cData.how["card1list"][3]}</div>
                        </div>
                      </div>
                    </div>
                    <div className="fl w-100 w-50-l pa2">
                      <div className="bg-white pa4 brBox ml4-l">
                        <img className="w-100" src="https://fakeimg.pl/100x150/"/>
                        <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["card2"]}}></p>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="quote relative" style={bgWarning}>
              <h4 className="bg-white absolute bottom-0 right-0 flex justify-center items-center ph4 pv3 pre-wrap" dangerouslySetInnerHTML={{__html:cData.how["quote"]}}></h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        {/* Cause */}
        <section id="cause" className="pv0">
          <div className="container bg-blue-3 pa4 pb0 brBox">
            <h2 className="title bg-blue-1" dangerouslySetInnerHTML={{__html:cData.cause["title"]}}></h2>
            <div className="center">
              {
                (isMobile) ? 
                (
                  <div className="cf tc">
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4">
                        <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                        <p className="bg-blue-5 br4 pa3 white lh-copy">{cData.cause["top"][0]}<br/>{cData.cause["content"][0]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4">
                        <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                        <p className="bg-blue-5 br4 pa3 white lh-copy">{cData.cause["top"][1]}<br/>{cData.cause["content"][1]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4">
                        <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                        <p className="bg-blue-5 br4 pa3 white lh-copy">{cData.cause["top"][2]}<br/>{cData.cause["content"][2]}</p>
                      </div>
                    </div>
                  </div>
                ):
                (
                  <div className="cf tc">
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4">
                        <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                        <label className="db bg-blue-1 br-100 white size100 center flex justify-center items-center">{cData.cause["top"][0]}</label>
                        <p className="bg-blue-5 br4 pa3 white">{cData.cause["content"][0]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4">
                        <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                        <label className="db bg-blue-1 br-100 white size100 center flex justify-center items-center">{cData.cause["top"][1]}</label>
                        <p className="bg-blue-5 br4 pa3 white">{cData.cause["content"][1]}</p>
                      </div>
                    </div>
                    <div className="fl w-100 w-third-l pa2">
                      <div className="pv4 mh4">
                        <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                        <label className="db bg-blue-1 br-100 white size100 center flex justify-center items-center">{cData.cause["top"][2]}</label>
                        <p className="bg-blue-5 br4 pa3 white">{cData.cause["content"][2]}</p>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="quote relative" style={bgBats}>
              <h4 className="bg-white absolute bottom-0 right-0 flex justify-center items-center ph4 pv3 pre-wrap">{cData.cause["quote"]}</h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        {/* Knowledge */}
        <section id="knowledge" className="pv0">
          <div className="container bg-blue-4 pa4 pb0 brBox">
            <h2 className="title bg-blue-2">{cData.knowledge["title"]}</h2>
            <div className="center">
              <div className="cf mh5-l mh2 flex flex-row-l flex-column">
                <div className="fl w-100 w-50-l pa2">
                  <div className="bg-white pa4 brBox mr4-l h-100">
                    <h3 className="pa3 tc bg-blue-5 br4 white f3 mv0 mh3">{cData.knowledge["cardtitle"][0]}</h3>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent1"][0]}}></p>
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent2"][0]}}></p>
                    <hr className="bw1 blue-4 mv4 db-l dn"/>
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent3"][0]}}></p>
                  </div>
                </div>
                <div className="fl w-100 w-50-l pa2">
                  <div className="bg-white pa4 brBox ml4-l h-100">
                    <h3 className="pa3 tc bg-blue-5 br4 white f3 mv0 mh3">{cData.knowledge["cardtitle"][1]}</h3>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent1"][1]}}></p>
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent2"][1]}}></p>
                    <hr className="bw1 blue-4 mv4 db-l dn"/>
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <p className="pre-wrap" dangerouslySetInnerHTML={{__html:cData.knowledge["cardcontent3"][1]}}></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mh5-l mh2 pa2">
              {
                (isMobile) ? 
                (<h3 className="pa4 tc br4 white f3 pre-wrap">{cData.knowledge["banner"]}</h3>):
                (<h3 className="pa4 tc bg-blue-3 br4 blue-1 f3 pre-wrap">{cData.knowledge["banner"]}</h3>)
              }
            </div>
            <div className="quote relative" style={bgNoWorry}>
              <h4 className="bg-white absolute bottom-0 right-0 flex justify-center items-center ph4 pv3 pre-wrap">{cData.knowledge["quote"]}</h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        {/* Factor */}
        <section id="factor" className="pv0">
          <div className="container bg-blue-3 pa4 pb0 tc brBox">
            <h2 className="title bg-blue-1">{cData.factor["title"]}</h2>
            <h3>{cData.factor["subtitle"]}</h3>
            <div className="flex flex-wrap mh5-l mh2">
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>{cData.factor["factors"][0]}</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>{cData.factor["factors"][1]}</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>{cData.factor["factors"][2]}</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>{cData.factor["factors"][3]}</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>{cData.factor["factors"][4]}</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>{cData.factor["factors"][5]}</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>{cData.factor["factors"][6]}</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>{cData.factor["factors"][7]}</label>
              </div>
            </div>
            <div className="mh5-l mh2 pa2">
              {
                (isMobile) ? 
                (<h3 className="pa3 tc br4 blue-1 f3 pre-wrap">{cData.factor["banner"]}</h3>):
                (<h3 className="pa3 tc bg-white br4 black f3 pre-wrap">{cData.factor["banner"]}</h3>)
              }
            </div>
            <div className="quote relative" style={bgAnswer}>
              <h4 className="bg-white absolute bottom-0 right-0 flex justify-center items-center ph4 pv3 pre-wrap">{cData.factor["quote"]}</h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        {/* QA */}
        <section id="qa" className="pv0">
          <div className="container bg-blue-5 pa4 brBox">
            <h2 className="title bg-blue-3">{cData.qa["title"]}</h2>
              {
                (isMobile) ? 
                (
                <div className="flex flex-column mh5-l mh2">
                  <div className="w-100 pa3 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="db mt0 mr5 w-100 mb3 pre-wrap">{cData.qa["question"][0]}</p>
                      <div className="br3 bg-blue-3 pa2 center dib w-100">
                        <img className="dib ma0" src="https://fakeimg.pl/100x120/"/>
                      </div>
                      <h3 className="pa3 tc bg-blue-4 br4 white f4 dib ph4 mt3 mb0 cp" onClick={() => this.handleOpenModal(1)}>答案</h3>  
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="db mt0 mr5 w-100 mb3 pre-wrap">{cData.qa["question"][1]}</p>
                      <div className="br3 bg-blue-3 pa2 center dib w-100">
                        <img className="dib ma0" src="https://fakeimg.pl/100x120/"/>
                      </div>
                      <h3 className="pa3 tc bg-blue-4 br4 white f4 dib ph4 mt3 mb0 cp" onClick={() => this.handleOpenModal(2)}>答案</h3>  
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="db mt0 mr5 w-100 mb3 pre-wrap">{cData.qa["question"][2]}</p>
                      <div className="br3 bg-blue-3 pa2 center dib w-100">
                        <img className="dib ma0" src="https://fakeimg.pl/100x120/"/>
                      </div>
                      <h3 className="pa3 tc bg-blue-4 br4 white f4 dib ph4 mt3 mb0 cp" onClick={() => this.handleOpenModal(3)}>答案</h3>  
                    </div>
                  </div>
                  <ReactModal 
                     style={customStyles}
                     isOpen={this.state.showModal}
                     contentLabel="Minimal Modal Example"
                     onRequestClose={this.handleCloseModal}
                  >
                    <div>
                      <h3>{modalContent.title[this.state.modal-1]}</h3>
                      <p>{modalContent.content[this.state.modal-1]}</p>
                      <img src={modalContent.image[this.state.modal-1]}/>
                    </div>
                    <div className="close" onClick={this.handleCloseModal}>x</div>
                  </ReactModal>
                </div>
                ) : 
                (
                <div className="flex flex-column mh5-l mh2 relative">
                  <div className={"modal w-80 brBox absolute h-100 bg-white black "+this.state.showModal}>
                    <div className="pa4">
                      <h3>{modalContent.title[this.state.modal-1]}</h3>
                      <div className="bg-blue-3 pa3 br3">
                        <img src={modalContent.image[this.state.modal-1]}/>
                      </div>
                      <p>{modalContent.content[this.state.modal-1]}</p>
                    </div>
                    <div className="close" onClick={this.handleCloseModal}>x</div>
                  </div>
                  <div className="w-100 pa3 flex justify-between">
                    <div className="ma0 flex items-center w-100">
                      <div className="br3 bg-blue-3 pa2">
                        <img className="dib ma0" src="https://fakeimg.pl/100x120/"/>
                      </div>
                      <p className="dib mv0 mr5 bg-white brRight pa4 w-100 pre-wrap">{cData.qa["question"][0]}</p>
                    </div>
                    <div className="br-100 bg-white pa2 overflow-hidden" onClick={() => this.handleOpenModal(1)}>
                      <img className="dib cp" src="https://fakeimg.pl/100x100/"/>
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between">
                    <div className="ma0 flex items-center w-100">
                      <div className="br3 bg-blue-3 pa2">
                        <img className="dib ma0" src="https://fakeimg.pl/100x120/"/>
                      </div>
                      <p className="dib mv0 mr5 bg-white brRight pa4 w-100 pre-wrap">{cData.qa["question"][1]}</p>
                    </div>
                    <div className="br-100 bg-white pa2 overflow-hidden" onClick={() => this.handleOpenModal(2)}>
                      <img className="dib cp" src="https://fakeimg.pl/100x100/"/>
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between">
                    <div className="ma0 flex items-center w-100">
                      <div className="br3 bg-blue-3 pa2">
                        <img className="dib ma0" src="https://fakeimg.pl/100x120/"/>
                      </div>
                      <p className="dib mv0 mr5 bg-white brRight pa4 w-100 pre-wrap">{cData.qa["question"][2]}</p>
                    </div>
                    <div className="br-100 bg-white pa2 overflow-hidden" onClick={() => this.handleOpenModal(3)}>
                      <img className="dib cp" src="https://fakeimg.pl/100x100/"/>
                    </div>
                  </div>
                </div>
                )
              }
          </div>      
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        {/* Map */}
        <section id="map" className="pv0">
          <div className="container bg-blue-3 pa4 brBox">
            <h2 className="title bg-blue-1 pre-wrap">{cData.map["title"]}</h2>
          </div>
        </section>

        {/* Banner */}
        <section id="banner" className="pb0">
          <div className="container">
            <h3 className="tc lh-copy f2 pb4 pre-wrap">{cData.banner}</h3>
            <img className="db center" src="https://fakeimg.pl/1000x300/"/>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </main>
    )
  }
}

export default App;
