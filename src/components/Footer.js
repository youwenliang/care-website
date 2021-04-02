import React, { Component } from 'react';
import $ from 'jquery';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  render(){
    return (
      <footer className="bg-blue pv5">
        <h1 className="ma4">Footer</h1>
      </footer>
    )
  }
}

export default Footer;
