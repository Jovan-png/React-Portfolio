import  react, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import ContactForm from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/Footer';
import Resume from './components/pages/Resume';
import Projects from './components/Project';


function App() {

  const [active, setActive] = useState(false)

  const [currentPage, handlePageChange] = useState('About');

useEffect(()=>{
  document.title = currentPage
})

  const renderPage = () =>{
    switch (currentPage){
case "Contact":
  return <ContactForm></ContactForm>;
  case "Resume":
  return <Resume></Resume>;
  case "Projects":
    return <Projects></Projects>;

  default: return <About></About>
    }
  }


  return (
    <div>
      <Nav
      active={active}
      setActive={setActive}
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
