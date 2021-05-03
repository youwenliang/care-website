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

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      search: null,
      currentMap: null,
      same: false,
      allList: []
    }
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
    setTimeout(function(){
      $t.setState({currentMap:null})
    },300)
    $t.setState({same: true});
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

  render(){
    const { width, height } = this.state;
    const isMobile = width <= 959;
    var $t = this;

    return (
        <section id="map" className="pv0">
          <div className="container bg-blue-3 pa4 brBox mh3">
            <p onClick={() => {this.setState({search:"診所"}, () => {this.openMap()})}}>診所</p>            
            <h2 className="title bg-blue-1 pre-wrap">{cData.map["title"]}</h2>
            {
                (isMobile) ? 
                (
                  <div className="bg-white mh2 brBox pa4"></div>
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
                    </div>
                    <div id="detailInfo" className="fl brBox bg-blue-3 o-0 position absolute pa4">
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