import  react, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import ContactForm from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/Footer';



function App() {

  const [currentPage, handlePageChange] = useState('About');

useEffect(()=>{
  document.title = currentPage
})

  const renderPage = (currentPage) =>{
    switch (currentPage){
case "Contact":
  return <ContactForm></ContactForm>;
  default: return <About></About>
    }
  }


  return (
    <div>
      <Nav
      currentPage={currentPage}
      handlePageChange={handlePageChange}
       
      ></Nav>
    <main>
   {renderPage()}
    </main>
    <Footer></Footer>
    </div>
  );
}

export default App;
