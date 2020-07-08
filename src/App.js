import React from 'react'
import './App.css'
import Header from './components/Header/Header'
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
    </div>
  );
}

export default App;
