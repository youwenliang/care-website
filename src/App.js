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

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  render(){
    return (
      <main>
        <Header/>
        <div id="top"></div>
        <section id="cover" className="pt0">
          <div className="container">
            <div className="bg-blue pa4 center">
              <h2 className="tc">別以為糖尿病只是尿尿比較甜而已<br/>它也會攻擊腎臟和心臟</h2>
              <h5 className="tc">糖尿病殺手</h5>
              <div id="start">開始</div>
            </div>
          </div>
        </section>

        <section id="car">
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

        <section id="how">
          <div className="container bg-blue pa4">
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

        <section id="cause">
          <div className="container bg-blue pa4">
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

        <section id="knowledge">
          <div className="container bg-blue pa4">
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

        <section id="factor">
          <div className="container bg-blue pa4 tc">
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

        <section id="qa">
          <div className="container bg-blue pa4">
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

        <section id="map">
          <div className="container bg-blue pa4">
            <h2 className="title">要怎麼找到</h2>
          </div>
        </section>

        <section id="banner">
          <div className="container">
            <h3 className="tc">如果有飲食</h3>
          </div>
        </section>

        <Footer/>
      </main>
    )
  }
}

export default App;
