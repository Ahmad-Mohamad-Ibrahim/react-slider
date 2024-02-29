import { Component } from "react";
import React, { useState } from 'react';
import "./Slider.css";

class Slider  extends Component {
  int = null;
  state = { imageNames: ['1' , '2', '3'], slide:1, len: 3 } 
  nextSlide = () => {
    this.setState( {slide: this.state.slide === this.state.len ? 1: this.state.slide + 1});
    console.log();
  };

  prevSlide = () => {
    this.setState( {slide: this.state.slide === 1 ? 3: this.state.slide - 1});

  };

  setSlide = () => {
    this.int = setInterval(this.nextSlide , 1000);
  }
  stopSlide = () => {
    if(this.int != null)
      clearInterval(this.int)
  }

  render() { 
    return (
      <>
      <div className="carousel">
        {this.state.imageNames.map((name, idx) => {
          return (
            <img
              src={'images/' + name + '.jpg'}
              key={idx}
              className={this.state.slide === idx + 1 ? "slide" : "slide slide-hidden"}
            />
          );
        })}
      </div>
      <div className="row">
        <button className="btn btn-primary col-1" onClick={this.prevSlide}>Previous</button>
        <button className="btn btn-primary col-1" onClick={this.nextSlide}>Next</button>
        <button className="btn btn-primary col-1" onClick={this.setSlide}>Slide</button>
        <button className="btn btn-primary col-1" onClick={this.stopSlide}>Stop</button>
      </div>
      </>
    );
  }
    
}
 
export default Slider;