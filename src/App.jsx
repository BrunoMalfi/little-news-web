import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsList from './components/NewsList/NewsList';
import Newsform from './components/NewsForm/Newsform';
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters'
import { GlobalProvider } from './context/GlobalState'
import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <GlobalProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newsform" element={<Newsform />} />
              <Route path="/newslist" element={<NewsList />} /> 
            </Routes>
            <Footer/>
          </GlobalProvider>
        </BrowserRouter>  
      </div>
    </>
  )
}

export default App
