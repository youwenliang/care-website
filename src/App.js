import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
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

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    $('#top').click(function(){
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });
  }
  render(){
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

    return (
      <main>
        <Header/>
        <div id="top" className="br-100"></div>
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

        <section id="car" className="bg-white">
          <div className="container">
            <div className="flex flex-column flex-row-l">
              <div className="outline w-100 w-50-l pa3 car">
                <label>線索一</label>
                <h3>糖尿病</h3>
                <p>內文</p>
              </div>
              <div className="outline w-100 w-50-l pa3">
                <div className="quote">
                  <h4>萬萬不可以</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-column-reverse flex-row-l">
              <div className="outline w-100 w-50-l pa3">
                <div className="quote">
                  <h4>萬萬不可以</h4>
                </div>
              </div>
              <div className="outline w-100 w-50-l pa3 car">
                <label>線索二</label>
                <h3>糖尿病</h3>
                <p>內文</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="pv0">
          <div className="container bg-blue-3 pa4 brBox">
            <h2 className="title">如何影響糖尿病友</h2>
            <div className="center">
              <div className="cf">
                <div className="fl w-100 w-50-l pa2">
                  <div className="bg-white pa4">
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <p>文字</p>
                    <div className="cf">
                      <div className="fl w-100 w-50-l ph2-l">1. 呼吸困難 <br/> 2. 耐力變差</div>
                      <div className="fl w-100 w-50-l ph2-l">3. 呼吸困難 <br/> 4. 耐力變差</div>
                    </div>
                  </div>
                </div>
                <div className="fl w-100 w-50-l pa2">
                  <div className="bg-white pa4">
                    <img className="w-100" src="https://fakeimg.pl/100x150/"/>
                    <p>文字</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="quote">
              <h4>萬萬不可以</h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        <section id="cause" className="pv0">
          <div className="container bg-blue-3 pa4 brBox">
            <h2 className="title">十大死因</h2>
            <div className="center">
              <div className="cf tc">
                <div className="fl w-100 w-third-l pa2">
                  <div className="bg-white pv4">
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <label>第2名</label>
                    <p>文字</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l pa2">
                  <div className="bg-white pv4">
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <label>第2名</label>
                    <p>文字</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l pa2">
                  <div className="bg-white pv4">
                    <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                    <label>第2名</label>
                    <p>文字</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="quote">
              <h4>到底是</h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        <section id="knowledge" className="pv0">
          <div className="container bg-blue-4 pa4 brBox">
            <h2 className="title">知己知彼</h2>
            <div className="center">
              <div className="cf">
                <div className="fl w-100 w-50-l pa2">
                  <div className="bg-white pv4">
                    <h3>高血壓</h3>
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
                  <div className="bg-white pv4">
                    <h3>高血壓</h3>
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
            <h3>奸詐的殺手們</h3>
            <div className="quote">
              <h4>別擔心</h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        <section id="factor" className="pv0">
          <div className="container bg-blue-3 pa4 tc brBox">
            <h2 className="title">你有這些</h2>
            <h3>如果有以下</h3>
            <div className="flex flex-wrap">
              <div className="outline w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="outline w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="outline w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="outline w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="outline w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="outline w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="outline w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
              <div className="outline w-25-ns w-50 pa3">
                <img className="w-100" src="https://fakeimg.pl/100x100/"/>
                <label>第2名</label>
              </div>
            </div>
            <h3>如果有以下</h3>
            <div className="quote">
              <h4>有其他</h4>
            </div>
          </div>
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        <section id="qa" className="pv0">
          <div className="container bg-blue-5 pa4 brBox">
            <h2 className="title">常見 Q&A</h2>
            <div className="flex flex-column">
              <div className="outline w-100 pa3 flex justify-between">
                <div className="ma0 flex items-center">
                  <img className="dib" src="https://fakeimg.pl/100x100/"/>
                  <p className="dib mv0 ml4">問題</p>
                </div>
                <img className="dib" src="https://fakeimg.pl/100x100/"/>
              </div>
              <div className="outline w-100 pa3 flex justify-between">
                <div className="ma0 flex items-center">
                  <img className="dib" src="https://fakeimg.pl/100x100/"/>
                  <p className="dib mv0 ml4">問題</p>
                </div>
                <img className="dib" src="https://fakeimg.pl/100x100/"/>
              </div>
              <div className="outline w-100 pa3 flex justify-between">
                <div className="ma0 flex items-center">
                  <img className="dib" src="https://fakeimg.pl/100x100/"/>
                  <p className="dib mv0 ml4">問題</p>
                </div>
                <img className="dib" src="https://fakeimg.pl/100x100/"/>
              </div>
            </div>
          </div>      
        </section>

        <div className="divider ma0 pa0">
          <img className="db center" src="https://fakeimg.pl/400x200/"/>
        </div>

        <section id="map" className="pt0">
          <div className="container bg-blue-3 pa4 brBox">
            <h2 className="title">要怎麼找到</h2>
          </div>
        </section>

        <section id="banner" className="pb0">
          <div className="container">
            <h3 className="tc lh-copy f2 pb4">如果有飲食、生活習慣、糖尿病用藥建議等問題<br/>都可以請教您的醫師與照護團隊喔！<br/>讓我們做伙控血糖～</h3>
            <img className="db center" src="https://fakeimg.pl/1000x300/"/>
          </div>
        </section>

        <Footer/>
      </main>
    )
  }
}

export default App;
