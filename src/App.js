
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/> 
        <News/>
        <Footer urlToImage="https://www.hindustantimes.com/ht-img/img/2023/11/23/1600x900/PTI11-23-2023-000167B-0_1700747665622_1700747691724.jpg"/>
      </div>
    )
  }
}

