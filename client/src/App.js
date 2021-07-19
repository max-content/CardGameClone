import React, { Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UploadForm from './components/UploadForm';
import axios from 'axios';
import { Router } from '@reach/router';

class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      logo: logo
    }
  };

  newImg = (file) => {
    this.setState({logo: file});
  }
  
  arrayBufferToBase64(buffer) {
    const binary = '';
    const bytes = [].slice.call( new Uint8Array(buffer));

    bytes.forEach((b) => binary += String.fromCharCode(b));

    return window.btoa(binary);
  };


  componentDidMount = id => {
    axios.post('http://localhost:8000/api/card/new', id)
    .then((res) => res.json())
    .then((data) => {
      var base64Flag = 'data:image/jpeg;base64,';
      var imageStr =
      this.arrayBufferToBase64(data.img.data.data);
      
      this.setState({
        img: base64Flag + imageStr
            })
    })
  }
  //   .then(res => this.setState({ img: res.data.id}))
  //   .catch(err => {
  //     this.setState({ errorMessage: err.message});
  //     console.log('There was an error', err);
  //   });
  // }

  render () {
      return (
        <div className="App">
            <header className="App-header">
              <img src={this.state.logo} className="App-logo" alt="logo" />
              <Router >
                <UploadForm path="/" onUploadProp={this.createCard} initialImg='' />
              </Router>
            </header>
      </div>
    );
  }
}

export default App;
