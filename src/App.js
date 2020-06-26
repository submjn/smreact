import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import About from './components/about'
import Blog from './components/blog'
import Works from './components/works'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import CallToAction from './components/callToAction'
import Stats from './components/stats'
import Photoswipe from './components/photoswipe'

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Works></Works>
      <Testimonials></Testimonials>
      <Blog></Blog>
      <CallToAction></CallToAction>
      <Stats></Stats>
      <Contact></Contact>
      <Footer></Footer>
      <Photoswipe></Photoswipe>
      <div id="preloader">
        <div id="loader"></div>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <div id="preloader">
    //     <div id="loader"></div>
    // </div>

    // <script src="js/jquery-3.2.1.min.js"></script>
    // <script src="js/plugins.js"></script>
    // <script src="js/main.js"></script>
    // </div>
  );
}

export default App;
