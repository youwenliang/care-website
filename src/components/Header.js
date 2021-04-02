import React, { Component } from 'react';
import $ from 'jquery';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  render(){
    return (
      <header className="bg-black center pt4 pb6">
        <h1 className="tc white">糖尿病保腎護心網</h1>
        <div id="logos" className="center w-100 tc">
          <img className="ma2" src="https://fakeimg.pl/100x50/"/>
          <img className="ma2" src="https://fakeimg.pl/100x50/"/>
        </div>
      </header>
    )
  }
}

export default Header;
