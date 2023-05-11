import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

import tab1 from '../images/nav_1.png';
import tab2 from '../images/nav_2.png';
import tab3 from '../images/nav_3.png';
import tab4 from '../images/nav_4.png';
import tab5 from '../images/nav_5.png';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  } 
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }

  render(){
    const { width } = this.state;
    const isMobile = width <= 959;
    var $t = this;

      // Get all the tab links
    const tabLinks = document.querySelectorAll('nav a');

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

    return (
        <nav>
          <ul>
            <li>
              <a href="#video">
                <img src={tab1} alt="看介紹"/>
                <span>看介紹</span>
                <span class="hover-text">看介紹</span>
              </a>
            </li>
            <li>
              <a href="#test">
                <img src={tab2} alt="測風險"/>
                <span>測風險</span>
                <span class="hover-text">測風險</span>
              </a>
            </li>
            <li>
              <a href="#how">
                <img src={tab3} alt="長知識"/>
                <span>長知識</span>
                <span class="hover-text">長知識</span>
              </a>
            </li>
            <li>
              <a href="#map">
                <img src={tab4} alt="找診所"/>
                <span>找診所</span>
                <span class="hover-text">找診所</span>
              </a>
            </li>
            <li>
              <a href="#qa">
                <img src={tab5} alt="問與答"/>
                <span>問與答</span>
                <span class="hover-text">問與答</span>
              </a>
            </li>
          </ul>
        </nav>
    )
  }
}
export default Nav