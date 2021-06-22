import React, { Component } from 'react';
import bgl from '../images/headerBGL.png';
import bgr from '../images/headerBGR.png';
import bglm from '../images/保腎護心網layout手機物件_01.png';
import bgrm from '../images/保腎護心網layout手機物件_02.png';

import micl from '../images/保腎護心網layout手機物件_04.png';
import micr from '../images/保腎護心網layout手機物件_05.png';
import logo1 from '../images/logo1.png';
import logo1_ from '../images/logo1_.png';
import logo2_ from '../images/logo2_.png';

import startImg from '../images/start.png';
import cover1 from '../images/保腎護心網layout物件_06.png';
import cover1m from '../images/保腎護心網layout手機物件_08.png';
import cover2 from '../images/保腎護心網layout物件_07.png';
import cover3 from '../images/保腎護心網layout物件_08.png';
import cover4 from '../images/保腎護心網layout物件_09.png';
import cover4m from '../images/保腎護心網layout手機物件_09.png';

import modal from '../images/modal.png';
import modalm from '../images/modalm.png';
import modalcircle from '../images/modalcircle.png';

import ReactModal from 'react-modal';
import closeBtn from '../images/保腎護心網layout物件_58.png';



import data from '../data/data.js'
import loadImage from 'image-promise';

// Data 
const cData = data.content;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      showModal: true,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (n) {
    this.setState({ showModal: true , modal: n});
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
    // When the modal is hidden...
    
    const scrollY = document.body.style.top;
    document.body.style.overflow = 'scroll';
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  componentDidMount(){
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
    document.getElementById('loading').classList.remove('fade');

    var images  = [bgl, bgr, bglm, bgrm, micl, micr, logo1, startImg, cover1, cover1m, cover2, cover3, cover4, cover4m];
    // eslint-disable-next-line no-unused-vars
    var loaded = false;
    
    loadImage(images)
    .then(function (allImgs) {
      // console.log(allImgs.length, 'images loaded!', allImgs);
      loaded = true;

      setTimeout(function(){
        document.getElementById('loading').classList.add('fade');
        // document.body.classList.remove('ds');
      },400);
    })
    .catch(function (err) {
      // console.error('One or more images have failed to load :(');
      // console.error(err.errored);
      // console.info('But these loaded fine:');
      // console.info(err.loaded);
    });
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight});
  }

  render(){
    const { width, height } = this.state;
    const isSmalls = width <= 483;
    const isSmall = width <= 600;
    const isMobile = width <= 959;
    // const isLarge = width <= 1888;
    const isBig = width <= 1576;
    var micY = isSmalls ? '75%':'69%';
    var popX = isSmalls ? '500px':'195px';

    var goal0 = isSmall ? "calc(50% + "+popX+") top, calc(50% - "+popX+") top, calc(50% + 150px) "+micY+", calc(50% - 150px) "+micY : "right top, left top, calc(50% + 150px) 69%, calc(50% - 150px) 69%"
    var goal1 = isBig ? "calc(50% + 1750px) top, calc(50% - 1750px) top, calc(50% + 360px) 37%, calc(50% - 360px) 37%" : "right top, left top, calc(50% + 360px) 37%, calc(50% - 360px) 37%"

    const customStyles = {
      content : {
        borderRadius: '30px',
        maxWidth: isMobile ? '600px':'960px',
        border: '8px solid #212E72',
        color: "black",
        backgroundColor: "white",
        margin: "auto",
        padding: 0,
        inset: isSmalls ? '16px':'50% 1rem auto',
        transform: isSmalls ? 'none':'translateY(-50%)',
        boxShadow: '0 3px 12px 3px rgba(0,0,0,.2)',
        overflow: 'hidden',
        maxHeight: isSmalls ? '755px' : 'calc(100vh - 32px)'
      }
    };


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

    var quoteStyle = {
      bottom: 0,
      maxHeight: isMobile ? "auto" : "268px"
    }

    var blockStyle = {
      maxWidth: isMobile ? "256px":"inherit"
    }

    var modalbox = {
       height: '100%',
       maxHeight: 'calc(100vh - 32px)',
       overflowY: "scroll"
    }


    return (
      <header className="center pt4 pb6-l pb5 relative" style={headerBG}>
        <h1 className="tc white f80 fw5 mt4 mb3 tracked" dangerouslySetInnerHTML={{__html:cData.header["title"]}}></h1>
        <h2 className="tc white f55 fw5 mv0 tracked">{cData.header["subtitle"]}</h2>
        <div id="logos" className="center w-100 tc">
          <div className="dib bg-white ma0 pa0" style={logoContainer}>
            <img className="ma2" alt="logo" src={logo1} width={isMobile ? "90":"200"}/>
          </div>
        </div>
        <ReactModal 
           style={customStyles}
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           onRequestClose={this.handleCloseModal}
        >
          <div className="tc ph4 pt4 pb0" style={modalbox}>
            <div className="flex mw-600 items-center mt4">
              <div className="bw1 db h1 w-100 bg-blue-2 mh3-l mh1"></div>
              <div className="flex flex-column flex-shrink">
                <div className="flex justify-center">
                  <img src={logo1_} alt="TACD" height={isMobile ? "30":"35"}/>
                  <img src={logo2_} alt="AstraZeneca" height={isMobile ? "30":"35"}/>
                </div>
                <h1 className="blue-2 f30 mv1">支持醫護,協力抗疫</h1>
              </div>
              <div className="bw1 db h1 w-100 bg-blue-2 mh3-l mh1"></div>
            </div>
            <h2 className="f50 blue-2">台灣基層糖尿病協會關心您</h2>
            <p className="f24ss lh-copy mw-600 center blue-5 fw4">就醫時請主動告知接觸史、旅遊史、職業暴露、周遭其他人是否有類似症狀等。如出現發燒或呼吸道症狀，請配戴口罩儘速就醫，建議前往鄰近指定採檢院所篩檢。</p>
            <div className="flex flex-row-l flex-column items-end">
              <div className="quote-block w-40-l center mh5-l mv5-l mv4 f32 fw5 tc lh-copy bg-blue-6 brL white flex justify-center items-center pa4-l pa3 pre-wrap relative" style={blockStyle}>
                <p className="ma0">控糖穩定 保腎護心<br/>維持按時服藥，<br/>規律回診</p>
                <img src={modalcircle} alt="heart" className="absolute bottom-0 right-0 pa4-l pa3" width={isMobile?"36":"50"}/>
              </div>
              <img className="center relative" src={isMobile ? modalm:modal} alt="illustration" width={isMobile?"290":"280"} style={quoteStyle}/>
            </div>
          </div>  
          <div className="close" onClick={this.handleCloseModal}><img alt="close" src={closeBtn}/></div>
        </ReactModal>
      </header>
    )
  }
}

export default Header;
