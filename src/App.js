
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App= ()=>{
  let pageSize=9
  let apiKey = process.env.REACT_APP_NEWS_API

    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>}></Route>
              <Route exact path="/business" element={<News key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business"/>}></Route>
              <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>}></Route>
              <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} country="in" category="health"/>}></Route>
              <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science"/>}></Route>
              <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category="sports"/>}></Route>
              <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/>}></Route>

            </Routes>



          </div>

        </BrowserRouter>
      </>

    )
  
}

export default App

