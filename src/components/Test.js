import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';
import logo from '../images/logo3.png';
import green from '../images/green.png';
import red from '../images/red.png';


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      results: 2
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
    this.handleSubmit = this.handleSubmit.bind(this);
  } 
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
  handleSubmit(event) {
    this.setState({results:0});
    event.preventDefault();
  }

  render(){
    const { width } = this.state;
    const isMobile = width <= 959;
    var $t = this;

      // Get all the tab links
    const tabLinks = document.querySelectorAll('.results a');

    // Add a click event listener to each tab link
    tabLinks.forEach(tabLink => {
      tabLink.addEventListener('click', event => {
        // Prevent default link behavior
        event.preventDefault();

        // Get the ID of the linked section
        const targetId = tabLink.getAttribute('href');

        // Get the linked section
        const targetSection = document.querySelector(targetId);

        // Calculate the distance from the top of the page to the linked section
        const targetOffsetTop = targetSection.offsetTop - 20;

        // Animate scrolling to the linked section
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth'
        });
      });
    });

    var logoImg = {
      width: '100%',
      maxWidth: '227px'
    }

    var bigButton = isMobile ? (
      <div>
        <img src={logo} width="227"/>
        <div className="bigButton mt3 flex justify-center flex-row items-center bg-blue-7 brRound pointer">
          <p className="tc f50 white fw5 mv2">↓ 快速尋找 ↓<br/>「保腎護心卓越機構」</p>
        </div>
      </div>
    ):(
      <div>
        <div className="bigButton center flex tc flex-row items-center bg-blue-7 brRound pointer">
          <img src={logo} style={logoImg}/>
          <p className="tc f50 white ml3 fw5">↓ 快速尋找 ↓<br/>「保腎護心卓越機構」</p>
        </div>
      </div>
    )

    let content;
    if(this.state.results === 1) {
      content = (
        <div className="results tc mh4-l mh3">
          <h3 className="f50 blue-1 tc">"您的狀況為<span className="green-1">綠燈</span>"</h3>
          <a href="#map" className="link">
            {bigButton}
          </a>
          <div className="tc w-100">
            <input className="formSubmit" type="submit" value="重測一次" onClick={this.handleSubmit}/>
          </div>
          <img className="mt5 resultImg mw-600" src={green} width='100%'/>
        </div>
      )


    } else if(this.state.results === 2) {
      content = (
        <div className="results tc mh4-l mh3">
          <h3 className="f50 blue-1 tc">"您的狀況為<span className="red-1">紅燈</span>"</h3>
          <a href="#map" className="link">
            {bigButton}
          </a>
          <div className="tc w-100">
            <input className="formSubmit" type="submit" value="重測一次" onClick={this.handleSubmit}/>
          </div>
          <img className="mt5 resultImg mw-600" src={red} width='100%'/>
        </div>
      )

      
    } else {
      content = (
        <div className="ph6-l ph4-ns pb5-l pb4-ns pb3">
          <h3 className="f32_ ma0 pb4 blue-1">基本資料</h3>
                <form className="f24_">
                  <label for="age" className="pr3">年齡</label>
                  <input type="number" id="age" name="age" required/><br/><br/>
                  
                  <label for="diabetes-duration" className="pr3">糖尿病病齡</label>
                  <select id="diabetes-duration" name="diabetes-duration" className="selectForm">
                    <option value="none" default></option>
                    <option value="0-5">0-5年</option>
                    <option value="5-10">5-10年</option>
                    <option value="10-15">10-15年</option>
                    <option value="15-20">15-20年</option>
                    <option value="20+">20年以上</option>
                    <option value="unknown">不清楚</option>
                  </select><br/><br/>
                  
                  <label className="pr3">性別</label>
                  <input type="radio" id="gender-male" name="gender" value="男"  className="mr2"/>
                  <label for="gender-male" className="pr3">男</label>
                  <input type="radio" id="gender-female" name="gender" value="女"  className="mr2"/>
                  <label for="gender-female" className="pr3">女</label>
                  <input type="radio" id="gender-undisclosed" name="gender" value="不願透漏" className="mr2"/>
                  <label for="gender-undisclosed">不願透漏</label><br/><br/>
                  
                  <label for="location" className="pr3">所在地區</label>
                  <select id="location" name="location" className="selectForm">
                    <option value="none" default></option>
                    <option value="臺北市">臺北市</option>
                    <option value="新北市">新北市</option>
                    <option value="桃園市">桃園市</option>
                    <option value="臺中市">臺中市</option>
                    <option value="臺南市">臺南市</option>
                    <option value="高雄市">高雄市</option>
                    <option value="新竹縣">新竹縣</option>
                    <option value="苗栗縣">苗栗縣</option>
                    <option value="彰化縣">彰化縣</option>
                    <option value="南投縣">南投縣</option>
                    <option value="雲林縣">雲林縣</option>
                    <option value="嘉義縣">嘉義縣</option>
                    <option value="屏東縣">屏東縣</option>
                    <option value="宜蘭縣">宜蘭縣</option>
                    <option value="花蓮縣">花蓮縣</option>
                    <option value="臺東縣">臺東縣</option>
                    <option value="澎湖縣">澎湖縣</option>
                    <option value="金門縣">金門縣</option>
                    <option value="連江縣">連江縣</option>
                    <option value="基隆市">基隆市</option>
                    <option value="新竹市">新竹市</option>
                    <option value="嘉義市">嘉義市</option>
                  </select><br/><br/>

                  <h3 className="f32_ ma0 pb4 blue-1 bt3 pt4">是否有以下情況，請勾選</h3>
                  <div className="fw5 f20">
                    <div className="formTable flex flex-row">
                      <div className="flex-shrink"></div>
                      <div className="f18_ flex-grow mw-500">
                        <label className="w3-l w2 tc">是</label>
                        <label className="w3-l w2 tc">否</label>
                        <label className="w3-l w2 tc nowrap">不知</label>
                      </div>
                    </div>
                    <div className="formTable flex flex-row">
                      <div className="flex-shrink"><label className="table">高血壓</label></div>
                      <div className="f18_ flex-grow mw-500">
                        <input type="radio" id="hypertension-yes" name="health-condition-hypertension" value="是"/>
                        <input type="radio" id="hypertension-no" name="health-condition-hypertension" value="否"/>
                        <input type="radio" id="hypertension-unknown" name="health-condition-hypertension" value="不知"/>  
                      </div>
                    </div>
                    <div className="formTable flex flex-row">
                      <div className="flex-shrink"><label className="table">微量蛋白尿以上</label></div>
                      <div className="f18_ flex-grow mw-500">
                        <input type="radio" id="hyperlipidemia-yes" name="health-condition-hyperlipidemia" value="是"/>
                        <input type="radio" id="hyperlipidemia-no" name="health-condition-hyperlipidemia" value="否"/>
                        <input type="radio" id="hyperlipidemia-unknown" name="health-condition-hyperlipidemia" value="不知"/>
                      </div>
                    </div>
                    <div className="formTable flex flex-row">
                      <div className="flex-shrink"><label className="table">高脂血症</label></div>
                      <div className="f18_ flex-grow mw-500">
                        <input type="radio" id="proteinuria-yes" name="health-condition-proteinuria" value="是"/>
                        <input type="radio" id="proteinuria-no" name="health-condition-proteinuria" value="否"/>
                        <input type="radio" id="proteinuria-unknown" name="health-condition-proteinuria" value="不知"/>  
                      </div>
                    </div>
                    <div className="formTable flex flex-row">
                      <div className="flex-shrink"><label className="table">抽菸</label></div>
                      <div className="f18_ flex-grow mw-500">
                        <input type="radio" id="smoking-yes" name="health-condition-smoking" value="是"/>
                        <input type="radio" id="smoking-no" name="health-condition-smoking" value="否"/>
                        <input type="radio" id="smoking-unknown" name="health-condition-smoking" value="不知"/>  
                      </div>
                    </div>
                    <div className="formTable flex flex-row">
                      <div className="flex-shrink"><label className="table">肥胖 (BMI > 27)</label></div>
                      <div className="f18_ flex-grow mw-500">
                        <input type="radio" id="obesity-yes" name="health-condition-obesity" value="是"/>
                        <input type="radio" id="obesity-no" name="health-condition-obesity" value="否"/>
                        <input type="radio" id="obesity-unknown" name="health-condition-obesity" value="不知"/>
                      </div>
                    </div>
                    <div className="formTable flex flex-row">
                      <div className="flex-shrink"><label className="table">心血管疾病</label></div>
                      <div className="f18_ flex-grow mw-500">
                        <input type="radio" id="cardiovascular-disease-yes" name="health-condition-cardiovascular-disease" value="是"/>
                        <input type="radio" id="cardiovascular-disease-no" name="health-condition-cardiovascular-disease" value="否"/>
                        <input type="radio" id="cardiovascular-disease-unknown" name="health-condition-cardiovascular-disease" value="不知"/>
                      </div>
                    </div>
                    <div className="formTable flex flex-row">
                      <div className="flex-shrink"><label className="table">家族成員有心血管疾病</label></div>
                      <div className="f18_ flex-grow mw-500">
                        <input type="radio" id="family-cardiovascular-disease-yes" name="health-condition-family-cardiovascular-disease" value="是"/>
                        <input type="radio" id="family-cardiovascular-disease-no" name="health-condition-family-cardiovascular-disease" value="否"/>
                        <input type="radio" id="family-cardiovascular-disease-unknown" name="health-condition-family-cardiovascular-disease" value="不知"/>
                      </div>
                    </div>
                    <div className="formTable flex flex-row">
                      <div className="flex-shrink"><label className="table">家族成員有慢性腎臟病</label></div>
                      <div className="f18_ flex-grow mw-500">
                        <input type="radio" id="family-chronic-kidney-disease-yes" name="health-condition-family-chronic-kidney-disease" value="是"/>
                        <input type="radio" id="family-chronic-kidney-disease-no" name="health-condition-family-chronic-kidney-disease" value="否"/>
                        <input type="radio" id="family-chronic-kidney-disease-unknown" name="health-condition-family-chronic-kidney-disease" value="不知"/>
                      </div>
                    </div>
                  </div>
                  <div className="tc w-100">
                    <input className="formSubmit" type="submit" value="送出"/>
                  </div>
                </form>
            </div>
      )
    }

    return (
        <section id="test" className="pv0">
          <div className="container bg-blue-3 pa4-l pv4 ph3 brBox mh3">
            <h2 className="title bg-blue-1 lh-copy pre-wrap">你「控」對了嗎 ? 有控糖不等於無風險 ! <br/>糖心腎一起看才完整 !</h2>
            <div className="mh3rem bg-white center brXL cf pt5-l pt4-ns pt3 ph3 pb0 relative mb3">
              {content}
            </div>
          </div>
        </section>
    )
  }
}
export default Test