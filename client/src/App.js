import React, { useState, useEffect } from "react";
import { Router } from '@reach/router';
// import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/tutorial/Header";
import Navbar from "./components/tutorial/Navbar";
import Footer from "./components/tutorial/Footer";
import Articles from "./components/tutorial/ArticleList";
import AddArticle from "./components/tutorial/NewArticle";
import EditArticle from "./components/tutorial/EditArticle";
import Article from "./components/tutorial/ShowArticle";

function App() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(error => console.log(error));
  }, [loaded]);
  
  const remove = id => {
    console.log(id);
    axios.delete(`http://localhost:5000/${id}`)
      .then(res => {
        setPosts(posts.filter(p => p._id != id));
        console.log(`Delete -- Delete -- ${id}, you have been deleted`)})
      .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <AddArticle path="/add-article" setLoaded={setLoaded} loaded={loaded} />
        <Articles path="/" posts={posts} remove={remove} />
        <Article path="/article/:id"/>
        <EditArticle path="/update/:id" />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
