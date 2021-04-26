import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ReactModal from 'react-modal';
import $ from 'jquery';
import './App.css';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

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
        inset: '20px' 
      }
    };
    const customStyles2 = {
      content : {
        borderRadius: '30px',
        border: '0px',
        width: '50%',
        height: '300px',  
      }
    };


    return (
      <main>
        {/* Header */}
        <Header/>
        <div id="top" className="br-100"></div>

        {/* Cover */}
        <section id="cover" className="pv0">
          <div className="container">
            <div className="pa4 center tc bg-blue-2 brBox" style={coverBG}>
              <h2 className="tc blue-1 lh-copy f3">別以為糖尿病只是尿尿比較甜而已<br/>它也會攻擊腎臟和心臟</h2>
              <div className="bg-blue-1 br-100 size250 center flex justify-center items-center">
                <h5 className="tc lh-copy white dib f4 normal">糖尿病殺手<br/>是如何攻擊<br/>腎和心的？<br/>快跟著我一起<br/>去瞧瞧吧！</h5>
              </div>
              <div id="start" className="bg-white dib ph4 pv2 black mt4" style={startBG}>開始</div>
            </div>
          </div>
        </section>

        {/* Car */}
        <section id="car" className="bg-white">
          <div className="container">
            <div className="flex flex-column flex-row-l">
              <div className="w-100 w-50-l pa3 car">
                <label>線索一</label>
                <h3>糖尿病</h3>
                <p>內文</p>
              </div>
              <div className="w-100 w-50-l pa3">
                <div className="quote">
                  <h4>萬萬不可以</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-column-reverse flex-row-l">
              <div className="w-100 w-50-l pa3">
                <div className="quote">
                  <h4>萬萬不可以</h4>
                </div>
              </div>
              <div className="w-100 w-50-l pa3 car">
                <label>線索二</label>
                <h3>糖尿病</h3>
                <p>內文</p>
              </div>
            </div>
          </div>
        </section>

        {/* How */}
        <section id="how" className="pv0">
          <div className="container bg-blue-3 pa4 brBox pb0">
            <h2 className="title bg-blue-1">如何影響糖尿病友</h2>
            <div className="center">
              <div className="cf mh5-l mh2 flex flex-row-l flex-column">
                <div className="fl w-100 w-50-l pa2">
                  <div className="bg-white pa4 brBox mr4-l h-100">
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <p>文字</p>
                    <div className="cf">
                      <div className="fl w-50 ph2-l">1. 呼吸困難 <br/> 2. 耐力變差</div>
                      <div className="fl w-50 ph2-l">3. 呼吸困難 <br/> 4. 耐力變差</div>
                    </div>
                  </div>
                </div>
                <div className="fl w-100 w-50-l pa2">
                  <div className="bg-white pa4 brBox ml4-l">
                    <img className="w-100" src="https://fakeimg.pl/100x150/"/>
                    <p>文字</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="quote relative">
              <img className="w-100 db" src="https://fakeimg.pl/400x100/"/>
              <h4 className="bg-white absolute bottom-0 right-0 flex justify-center items-center ph4 pv3">萬萬不可以</h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        {/* Cause */}
        <section id="cause" className="pv0">
          <div className="container bg-blue-3 pa4 pb0 brBox">
            <h2 className="title bg-blue-1">十大死因<sup className="ml2 f3 fw5">3</sup></h2>
            <div className="center">
              <div className="cf tc">
                <div className="fl w-100 w-third-l pa2">
                  <div className="pv4 mh4">
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <label className="db bg-blue-1 br-100 white size100 center flex justify-center items-center">第2名</label>
                    <p className="bg-blue-5 br4 pa3 white">文字</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l pa2">
                  <div className="pv4 mh4">
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <label className="db bg-blue-1 br-100 white size100 center flex justify-center items-center">第2名</label>
                    <p className="bg-blue-5 br4 pa3 white">文字</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l pa2">
                  <div className="pv4 mh4">
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <label className="db bg-blue-1 br-100 white size100 center flex justify-center items-center">第2名</label>
                    <p className="bg-blue-5 br4 pa3 white">文字</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="quote relative">
              <img className="w-100 db" src="https://fakeimg.pl/400x100/"/>
              <h4 className="bg-white absolute bottom-0 right-0 flex justify-center items-center ph4 pv3">到底是</h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        {/* Knowledge */}
        <section id="knowledge" className="pv0">
          <div className="container bg-blue-4 pa4 pb0 brBox">
            <h2 className="title bg-blue-2">知己知彼</h2>
            <div className="center">
              <div className="cf mh5-l mh2 flex flex-row-l flex-column">
                <div className="fl w-100 w-50-l pa2">
                  <div className="bg-white pa4 brBox mr4-l h-100">
                    <h3 className="pa3 tc bg-blue-5 br4 white f3 mv0 mh3">高血壓</h3>
                    <p>血壓值</p>
                    <p>超過</p>
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <label>第2名</label>
                    <p>超過</p>
                    <hr/>
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <label>第2名</label>
                    <p>超過</p>
                    <p>超過</p>
                  </div>
                </div>
                <div className="fl w-100 w-50-l pa2">
                  <div className="bg-white pa4 brBox ml4-l h-100">
                    <h3 className="pa3 tc bg-blue-5 br4 white f3 mv0 mh3">蛋白尿</h3>
                    <p>血壓值</p>
                    <p>超過</p>
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <label>第2名</label>
                    <p>超過</p>
                    <hr/>
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <label>第2名</label>
                    <p>超過</p>
                    <p>超過</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mh5-l mh2 pa2">
              <h3 className="pa4 tc bg-blue-3 br4 blue-1 f3">奸詐的殺手們</h3>
            </div>
            <div className="quote relative">
              <img className="w-100 db" src="https://fakeimg.pl/400x100/"/>
              <h4 className="bg-white absolute bottom-0 right-0 flex justify-center items-center ph4 pv3">到底是</h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        {/* Factor */}
        <section id="factor" className="pv0">
          <div className="container bg-blue-3 pa4 pb0 tc brBox">
            <h2 className="title bg-blue-1">你有這些</h2>
            <h3>如果有以下</h3>
            <div className="flex flex-wrap mh5-l mh2">
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
            </div>
            <div className="mh5-l mh2 pa2">
              <h3 className="pa3 tc bg-white br4 black f3">奸詐的殺手們</h3>
            </div>
            <div className="quote relative">
              <img className="w-100 db" src="https://fakeimg.pl/400x100/"/>
              <h4 className="bg-white absolute bottom-0 right-0 flex justify-center items-center ph4 pv3">到底是</h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        {/* QA */}
        <section id="qa" className="pv0">
          <div className="container bg-blue-5 pa4 brBox">
            <h2 className="title bg-blue-3">常見 Q&A</h2>
              {
                (isMobile) ? 
                (
                <div className="flex flex-column mh5-l mh2">
                  <div className="w-100 pa3 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="db mt0 mr5 w-100 mb3">問題</p>
                      <div className="br3 bg-blue-3 pa2 center dib w-100">
                        <img className="dib ma0" src="https://fakeimg.pl/100x120/"/>
                      </div>
                      <h3 className="pa3 tc bg-blue-4 br4 white f4 dib ph4 mt3 mb0 cp" onClick={() => this.handleOpenModal(1)}>答案</h3>  
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="db mt0 mr5 w-100 mb3">問題</p>
                      <div className="br3 bg-blue-3 pa2 center dib w-100">
                        <img className="dib ma0" src="https://fakeimg.pl/100x120/"/>
                      </div>
                      <h3 className="pa3 tc bg-blue-4 br4 white f4 dib ph4 mt3 mb0 cp" onClick={() => this.handleOpenModal(2)}>答案</h3>  
                    </div>
                  </div>
                  <div className="w-100 pa3 flex justify-between">
                    <div className="ma0 tc w-100 bg-white br4 pa4">
                      <p className="db mt0 mr5 w-100 mb3">問題</p>
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
                    {this.state.modal}
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                  </ReactModal>
                </div>
                ) : 
                (
                <div className="flex flex-column mh5-l mh2 relative">
                  <div className={"modal w-80 brBox absolute h-100 bg-white "+this.state.showModal}>
                    {this.state.modal}
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                  </div>
                  <div className="w-100 pa3 flex justify-between">
                    <div className="ma0 flex items-center w-100">
                      <div className="br3 bg-blue-3 pa2">
                        <img className="dib ma0" src="https://fakeimg.pl/100x120/"/>
                      </div>
                      <p className="dib mv0 mr5 bg-white brRight pa4 w-100">問題</p>
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
                      <p className="dib mv0 mr5 bg-white brRight pa4 w-100">問題</p>
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
                      <p className="dib mv0 mr5 bg-white brRight pa4 w-100">問題</p>
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
            <h2 className="title bg-blue-1">要怎麼找到</h2>
          </div>
        </section>

        {/* Banner */}
        <section id="banner" className="pb0">
          <div className="container">
            <h3 className="tc lh-copy f2 pb4">如果有飲食、生活習慣、糖尿病用藥建議等問題<br/>都可以請教您的醫師與照護團隊喔！<br/>讓我們做伙控血糖～</h3>
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
