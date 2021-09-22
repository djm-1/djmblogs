import { useState } from 'react';
import './App.css';
import NavBar from './comps/NavBar';
import Footer from './comps/Footer';

function App() {
  const [theme,setTheme]=useState({
    themeName:'light',
    navColor:'light',
    btnColor:'primary',

  });
  
  const toggle=()=>{
    if (theme.themeName==='light')
    {
      setTheme({
        themeName:'dark',
        navColor:'special',
        btnColor:'secondary',
      })
      document.body.style.backgroundColor='#1C2331';
      document.body.style.color='white';
      
    }
    else
    {
      setTheme({
        themeName:'light',
        navColor:'light',
        btnColor:'primary',
      })
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
    <>
    <NavBar theme={theme} toggleMode={toggle}></NavBar>
    <Footer></Footer>
    </>
  );
}

export default App;
