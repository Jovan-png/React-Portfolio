import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';



function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
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
    </div>
  );
}

export default App;
