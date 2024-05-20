import './App.css'
import React from 'react'
import Header from './Header.jsx'
import SideMenu from './SideMenu.jsx'
import Footer from './Footer.jsx'

function App() {
 

  return (
    <>
      <div>
       <Header/>
        <div className='content'>
        <SideMenu/>
        <main>
          <h1>Welcome To CampSite</h1>
          <p>Your one-stop shop for all camping needs.</p>
        </main>
        </div>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
