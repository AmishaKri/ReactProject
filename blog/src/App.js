import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Header from './MyComponents/Header';
import './Style.css';
import Html from './MyComponents/Html'
import {forms} from './MyComponents/topics/forms'
import {head} from './MyComponents/topics/head'
import {Basictags} from './MyComponents/topics/Basictags'
import {Inlineblocks} from './MyComponents/topics/Inlineblocks'
import {media} from './MyComponents/topics/media'
import {htmlTables} from './MyComponents/topics/htmlTables '


import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Basictags from './MyComponents/topics/HTML Basic tag';
import Inlineblocks from './MyComponents/topics/Inline&blocks';
import Introduction from './MyComponents/topics/INTODUCTION';
function App() {
  return (
    <>
     <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route exact path="/Html" element={<Html/>}></Route>
          <Route exact path="/" element={<forms />}></Route>
          <Route exact path="/Html" element={<head/>}></Route>
          <Route exact path="/" element={<Basictags />}></Route>
          <Route exact path="/Html" element={<htmlLists/>}></Route>
          <Route exact path="/" element={<Inlineblocks />}></Route>
          <Route exact path="/Html" element={<media/>}></Route>
          <Route exact path="/" element={<Introduction />}></Route>
          <Route exact path="/Html" element={<table/>}></Route>
        </Routes>
      </Router>
    
      
   
</>
  );    
}

export default App;
