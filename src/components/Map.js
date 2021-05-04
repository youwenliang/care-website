import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

import Taiwan from "@svg-maps/taiwan.main";
import { SVGMap, CheckboxSVGMap, RadioSVGMap} from "react-svg-map";
import "react-svg-map/lib/index.css";

// Data
import data from '../data/data.js'
const cData = data.content;
const mData = data.map;
var dis = [], list = [], allList = [];
var sCity = [], sDis = [];

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
      sDis: null
    }
    this.handleSelect1 = this.handleSelect1.bind(this);
    this.handleSelect2 = this.handleSelect2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      $t.setState({value: ""})
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
        $t.setState({same: true});
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
  openMap = () => {
    $('#detailInfo').removeClass("o-0");
    $('#mapInfo').removeClass("w-100");
    $('#mapInfo').addClass("w-50");
    this.clinincList()
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
    $t.setState({currentMap:null, same: true, value: "", allList: null});
  }

  // Clinic Component
  clinincList = () => {
    dis = [];
    list = [];
    let filteredClinics = mData.filter((s) => {
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
          "address": [s.address]
        })
      } else {
        for(var i = 0; i < list.length; i++){
          if(list[i]["dis"] == temp) {
            list[i]["address"].push(s.address)
          }
        }
      }
    });
    allList = [];

    for(var j = 0; j < list.length; j++) {
      var temp = (
        <div key={j}>
          <h1>{list[j]["dis"]}</h1>
          <div>{list[j]["address"]}</div>
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
    var form = {
      position: isMobile ? "relative":"absolute",
      bottom: "0",
    }

    return (
        <section id="map" className="pv0">
          <div className="container bg-blue-3 pa4 brBox mh3">
            <h2 className="title bg-blue-1 pre-wrap">{cData.map["title"]}</h2>
            {
                (isMobile) ? 
                (
                  <div className="relative bg-white mh2 brBox">
                    <div className="pa4 absolute">
                      <form className="center" style={form} onSubmit={this.handleSubmit}>
                        <input type="text" id="search" name="clinic" placeholder="輸入診所名稱查詢" value={this.state.value} onChange={this.handleChange}/>
                        <select name="city" id="sCity" onChange={this.handleSelect1}>
                          <option value="" disabled selected>縣市</option>
                        </select>
                        <select name="dis" id="sDis" onChange={this.handleSelect2}>
                          <option value="" disabled selected>地區</option>
                        </select>
                        <input type="submit" value="查詢"/>
                      </form>                       
                    </div>
                    <div id="detailInfo" className="o-0 pa4 relative z1 bg-white brBox">
                      <p>{this.state.currentMap}</p>
                      {this.state.allList}
                      <button onClick={() => {this.resetMap()}}>close</button>
                    </div>
                  </div>
                ):
                (
                  <div className="mapContainer bg-white mh5 brBox cf pa4 relative">
                    <div id="mapInfo" className="fl w-100 relative h-100">
                      <RadioSVGMap 
                        map={Taiwan}
                        onChange={function(n){
                          $t.setState({currentMap:n.id, search:n.id}, () => {
                            $t.openMap();
                          });
                        }}
                      />
                      <form className="center" style={form} onSubmit={this.handleSubmit}>
                        <input type="text" id="search" name="clinic" placeholder="輸入診所名稱查詢" value={this.state.value} onChange={this.handleChange}/>
                      </form>                       
                    </div>
                    <div id="detailInfo" className="fl brBox bg-blue-3 o-0 absolute pa4">
                      <p>{this.state.currentMap}</p>
                      {this.state.allList}
                      <button onClick={() => {this.resetMap()}}>close</button>
                    </div>
                  </div>
                )
            }
          </div>
        </section>
    )
  }
}
export default Map