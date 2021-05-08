import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

import Taiwan from "@svg-maps/taiwan.main";
import { SVGMap, CheckboxSVGMap, RadioSVGMap} from "react-svg-map";
import "react-svg-map/lib/index.css";
import logo3 from '../images/logo3.png';

import searchBtn from '../images/保腎護心網layout物件_57.png';
import closeBtn from '../images/保腎護心網layout物件_58.png';
import backBtn from '../images/保腎護心網layout物件_59.png';
import mapBtn from '../images/map.png';

// Data
import data from '../data/data.js'
const cData = data.content;
const mData = data.map;
var dis = [], list = [], allList = [];
var sCity = [], sDis = [];
var filteredClinics = null;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      value: "",
      search: null,
      currentMap: null,
      same: false,
      allList: [],
      sCity: null,
      sDis: null,
      open: false,
      detail: false,
      currentClinic: null
    }
    this.handleSelect1 = this.handleSelect1.bind(this);
    this.handleSelect2 = this.handleSelect2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.detailMap = this.detailMap.bind(this);
  }

  componentDidMount(){
    var $t = this

    // Map
    $('.svg-map__location').each(function(){
      if($(this).attr('id').indexOf("city") >=0) {
        $(this).attr('aria-city', 'true');
      }
    })
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile()

    // Maps
    $('path').click(function(){
      $t.setState({value: "", detail: false})
      if($(this).attr('aria-checked') === "true") {
        $(this).attr('aria-checked', "false");
        $(this).attr('aria-before', $t.state.currentMap);
        $(this).attr('tabindex', "-1");
        setTimeout(function(){
          $t.setState({currentMap:null})
        },300)
        $('#detailInfo').addClass("o-0");
        $('#mapInfo').addClass("w-100");
        $('#mapInfo').removeClass("w-50");
        $t.setState({same: true, open: false});
      } else {
        if($(this).attr('aria-before')) {
          $t.setState({currentMap:$(this).attr('aria-before'), search:$(this).attr('aria-before')});
          var thisID = $(this).attr('id');
          $('path').each(function(){
            if($(this).attr('id')!==thisID) $(this).attr('aria-before','');     
          })
        } else {
          $t.setState({same: false});
          $('path').each(function(){
            if($(this).attr('id')!==thisID) $(this).attr('aria-before','');     
          })
        }
        if($t.state.same) {
          $(this).attr('aria-checked', "true");
          $(this).attr('tabindex', "0");
          $t.openMap(); 
        }
      }
    })
  }

  checkMobile = () => {
    this.setState({ width: window.innerWidth });
    this.setState({ height: window.innerHeight });
    sCity = [];
    $('#sCity').empty();
    $('#sCity').append('<option value="" disabled selected>縣市</option>');
    for(var k = 0; k < mData.length; k++) {
      if(!sCity.includes(mData[k]["address"].substring(0,3))) {
        sCity.push(mData[k]["address"].substring(0,3));
        $('#sCity').append('<option>'+mData[k]["address"].substring(0,3)+'</option>');
      }
    }
  }

  detailMap = (e) => {
    var n = e.target.getAttribute('data-id');
    var i = e.target.getAttribute('data-order');
    if(this.state.detail) {
      this.setState({detail: false, currentClinic: null})
      // $('#detailInfo').addClass('overflow-y-scroll');
    } else {
      this.setState({detail: true, currentClinic: [n, i]})
      // $('#detailInfo').removeClass('overflow-y-scroll');
    }
  }

  openMap = () => {
    $('#detailInfo').removeClass("o-0");
    $('#mapInfo').removeClass("w-100");
    $('#mapInfo').addClass("w-50");
    this.clinincList()
    this.setState({open: true, currentClinic: null});
  }

  resetMap = () => {
    $('#detailInfo').addClass("o-0");
    $('#mapInfo').addClass("w-100");
    $('#mapInfo').removeClass("w-50");
    var $t = this;
    var $p = $('path[aria-checked="true"]');
    $p.attr('aria-checked', "false");
    $p.attr('aria-before', $t.state.currentMap);
    $p.attr('tabindex', "-1");
    $t.setState({currentMap:null, detail: false, same: true, value: "", allList: null, open: false});
  }

  // Clinic Component
  clinincList = () => {
    dis = [];
    list = [];
    
      filteredClinics = mData.filter((s) => {
        var check = s.city+" "+s.name+" "+s.address;
        return check.indexOf(this.state.search) !== -1;
      });
      filteredClinics.map((s, i) => {
        var count = s.address.indexOf('區') - 2;
        var temp = s.address.substring(count, count+3);
        if(!dis.includes(temp)) {
          dis.push(temp);
          list.push({
            "dis": temp,
            "name": [s.name],
            "address": [s.address],
            "phone": [s.phone]
          })
        } else {
          for(var i = 0; i < list.length; i++){
            if(list[i]["dis"] == temp) {
              list[i]["name"].push(s.name)
              list[i]["address"].push(s.address)
              list[i]["phone"].push(s.phone)
            }
          }
        }
      });
      allList = [];
      var styleH1 = this.state.width <= 969 ? "white bg-blue-3" : "blue-2 bg-white"

      for(var j = 0; j < list.length; j++) {
        var temp = (
          <div className="w-50 tc" key={j}>
            <h1 className={ styleH1 + " fw5 f24_ ph4-l ph3 pv3 brM dib"}>{list[j]["dis"]}</h1>
            {list[j]["name"].map((name, i) => (
              <p className="cp f16_" data-id={j} data-order={i} onClick={this.detailMap}>{name}</p>
            ))}
          </div>
        )
        allList.push(temp);
      }
      this.setState({allList:allList});
    
  }

  handleSelect1(event) {
    var $t = this;
    this.setState({value: event.target.value, sCity: event.target.value}, () => {
      sDis = [];
      $('#sDis').empty();
      $('#sDis').append('<option value="" disabled selected>地區</option>');
      for(var i = 0; i < mData.length; i++) {
        if(mData[i]["address"].includes($t.state.value)) {
          console.log(mData[i]);  
          console.log(this.state.value);
          if(!sDis.includes(mData[i]["address"].substring(3,6))) {
            sDis.push(mData[i]["address"].substring(3,6));
            $('#sDis').append('<option>'+mData[i]["address"].substring(3,6)+'</option>');
          }
        }
      }
    });
  }

  handleSelect2(event) {
    this.setState({sDis:event.target.value}, () => {
      this.setState({value: this.state.sCity+this.state.sDis});
    });
  }

  handleChange(event) {    
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    this.setState({search:this.state.value}, () => {this.resetMap(); this.openMap()});
    event.preventDefault();
  }

  render(){
    const { width, height } = this.state;
    const isMobile = width <= 959;
    var $t = this;
    var form = isMobile ? {
      position: "relative",
      width: "100%",
      borderRadius: "16px",
      fontSize: "1.2rem"
    }:
    {
      position: "absolute",
      left: "0",
      right: "0",
      bottom: "30px",
      width: "235px",
      transform: "translateX(80%)",
      borderRadius: "16px",
      backgroundImage: "url("+searchBtn+")",
      backgroundPosition: "10px center",
      backgroundSize: "30px",
      backgroundRepeat: "no-repeat"
    }
    var inputBox = {
      borderRadius: "8px",
      width: "100%",
      backgroundImage: "url("+searchBtn+")",
      backgroundPosition: "10px center",
      backgroundSize: "30px",
      backgroundRepeat: "no-repeat"
    }

    var input = isMobile ? {
      borderRadius: "8px",
      width: "calc(100% - 40px)",
      left: "40px"
    }:
    {
      borderRadius: "8px",
      width: "170px",
      left: "32px"
    }

    var box = {
      minHeight: "360px",
      maxHeight: "600px"
    }

    var page1box = {
      maxHeight: "504px",
    }

    var drop = {
      gap: "16px",
    }

    return (
        <section id="map" className="pv0">
          <div className="container bg-blue-3 pa4-l pv4 ph3 brBox mh3">
            <h2 className="title bg-blue-1 pre-wrap lh-copy">{cData.map["title"]}</h2>
            {
                (isMobile) ? 
                (
                  <div className="relative bg-white mh2 brXL mt3" style={box}>
                    <div className="pa4 absolute w-100">
                      <img className="db center mt2 mb3" src={logo3} width="60" />
                      <form id="searchInput" className="center" style={form} onSubmit={this.handleSubmit}>
                        <div className="bg-blue-3 pa2 mb3" style={inputBox}>
                          <input style={input} className="bg-white pa2 relative" type="text" id="search" name="clinic" placeholder="輸入診所名稱查詢" value={this.state.value} onChange={this.handleChange}/>
                        </div>
                        <div className="f40 flex mv0" style={drop}>
                          <div className="tc select flex-grow brS">
                            <select name="city" id="sCity" onChange={this.handleSelect1}>
                              <option value="" disabled selected>縣市</option>
                            </select>
                          </div>
                          <div className="tc select flex-grow brS">
                            <select name="dis" id="sDis" onChange={this.handleSelect2}>
                              <option value="" disabled selected>地區</option>
                            </select>
                          </div>
                        </div>
                        <input className="db tc center mt3 bg-blue-1 pv3 cp ph4 white br3 f40 fw5" type="submit" value="查詢"/>
                      </form>                       
                    </div>
                    <div id="detailInfo" className="o-0 pa2 relative z-1 bg-white brXL" style={box}>
                      <div className="page1 pt5 flex flex-wrap pb4 overflow-y-scroll content-start" style={page1box}>
                        {this.state.allList}
                      </div>
                      <div className={"page2 absolute top-0 left-0 w-100 h-100 bg-white ph4 pv5 brXL "+this.state.detail}>
                        <div className="overflow-y-scroll h-100 mv3 blue-2 tl overflow-x-hidden">
                          <h3 className="f24_ fw5 mb0">{this.state.currentClinic && filteredClinics ? list[this.state.currentClinic[0]]["name"][this.state.currentClinic[1]] : null}</h3>
                          <div className="flex items-center">
                            <p className="f16_ dib mr2">地址：{this.state.currentClinic && filteredClinics ? list[this.state.currentClinic[0]]["address"][this.state.currentClinic[1]] : null}</p>
                            <a href={this.state.currentClinic && filteredClinics ? "http://maps.google.com/?q="+list[this.state.currentClinic[0]]["name"][this.state.currentClinic[1]] : null} target='_blank'><img src={mapBtn} className="dib cp" width="40"/></a>
                          </div>
                          <hr className="bw1 bg-blue-2 mv2"/>
                          <p className="f16_ fw5 mt4">門診電話：{this.state.currentClinic && filteredClinics ? list[this.state.currentClinic[0]]["phone"][this.state.currentClinic[1]] : null}</p>
                        </div>
                        <div className="back" onClick={this.detailMap}><img src={backBtn}/></div>
                      </div>
                      <div className="close" onClick={() => {this.resetMap()}}><img src={closeBtn}/></div>
                    </div>
                  </div>
                ):
                (
                  <div className="mapContainer bg-white center brXL cf pa4 relative mb3">
                    <div id="mapInfo" className="fl w-100 relative h-100">
                      <RadioSVGMap 
                        map={Taiwan}
                        onChange={function(n){
                          $t.setState({currentMap:n.id, search:n.id}, () => {
                            $t.openMap();
                          });
                        }}
                      />
                      <form id="searchInput" className="center bg-blue-3 pa3" style={form} onSubmit={this.handleSubmit}>
                        <input style={input} className="bg-white pa2 relative" type="text" id="search" name="clinic" placeholder="輸入診所名稱查詢" value={this.state.value} onChange={this.handleChange}/>
                      </form>                       
                    </div>
                    <div id="detailInfo" className="fl brXL bg-blue-3 o-0 absolute pa2">
                      <div className="page1 flex flex-wrap overflow-y-scroll h-100 ph4 pv5 content-start">
                        {this.state.allList}
                        <div className="close" onClick={() => {this.resetMap()}}><img src={closeBtn}/></div>
                      </div>
                      <div className={"page2 absolute top-0 left-0 w-100 h-100 bg-blue-3 ph4 pv5 brXL "+this.state.detail}>
                        <div className="overflow-y-scroll h-100 mv3 blue-2 tl">
                          <h3 className="f24_ fw5 mb0">{this.state.currentClinic && filteredClinics ? list[this.state.currentClinic[0]]["name"][this.state.currentClinic[1]] : null}</h3>
                          <div className="flex items-center">
                            <p className="f16_ dib">地址：{this.state.currentClinic && filteredClinics ? list[this.state.currentClinic[0]]["address"][this.state.currentClinic[1]] : null}</p>
                            <a href={this.state.currentClinic && filteredClinics ? "http://maps.google.com/?q="+list[this.state.currentClinic[0]]["name"][this.state.currentClinic[1]] : null} target='_blank'><img src={mapBtn} className="dib ml2 cp" width="40"/></a>
                          </div>
                          <hr className="bw1 bg-white mv2"/>
                          <p className="f16_ fw5 mt4">門診電話：{this.state.currentClinic && filteredClinics ? list[this.state.currentClinic[0]]["phone"][this.state.currentClinic[1]] : null}</p>
                        </div>
                        <div className="back" onClick={this.detailMap}><img src={backBtn}/></div>
                        <div className="close" onClick={() => {this.resetMap()}}><img src={closeBtn}/></div>
                      </div>
                    </div>
                    <img className="absolute pn bottom-0 left-0 pa5 transition" src={logo3} width={this.state.open ? "100":"230"} />
                  </div>
                )
            }
          </div>
        </section>
    )
  }
}
export default Map