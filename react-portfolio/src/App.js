import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';



function App() {
  const [categories] = useState([
    {
      name: 'About',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    }
  ]);


  const [contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
  categories={categories}
  setCurrentCategory={setCurrentCategory}
  currentCategory={currentCategory}
  contactSelected={contactSelected}
  setContactSelected={setContactSelected}
      ></Nav>
    <main>
    {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
    </main>
    <Footer></Footer>
    </div>
  );
}

export default App;
