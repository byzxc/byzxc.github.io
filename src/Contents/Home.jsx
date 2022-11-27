import React, { Component } from "react";
import logo from './logo/test.png';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div class="background">
        <h2>Home</h2>
        <p>
          Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
          Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
          rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
          molestie. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
        <img id="homeimage" alt="homeimage" src={logo} />
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>   
        </div>
      </div>
    );
  }
}

export default Home;
