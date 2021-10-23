import React from 'react';
// import Main from './Main';
// import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css';

// import Articles from './components/tutorial/Articles';
// import Article from './components/tutorial/Article';
// import AddArticle from './components/tutorial/AddArticle';
// import EditArticle from './components/tutorial/EditArticle';
import Navbar from './components/tutorial/Navbar';
import Footer from './components/tutorial/Footer';
import Header from './components/tutorial/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;

