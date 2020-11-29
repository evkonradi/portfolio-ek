import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import imgHero from './assets/hero.jpg';
import './index.css';


function App() {

  const [categories] = useState([
    { name: 'About Me', href: 'about-me' },
    { name: 'What I Do' , href: 'resume'},
    { name: 'Projects', href: 'portfolio'},
    { name: 'Contact', href: 'contact' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderPage = () =>{
    switch (currentCategory.name) {
      case 'Projects' : 
        return <Portfolio />;
      case 'Contact' : 
        return <Contact />;
      case 'What I Do' : 
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <div className="font-main">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <section className="jumb">
        <div className="heroOverlay">
          <img src={imgHero} className="heroHidden" alt="Website development"></img>
          <h2 className="card font-size-menu">
            Quality website development!
          </h2>
        </div>
      </section>
      <main>
        <div>{renderPage()}</div>
      </main>
      <Footer></Footer>
   </div>
    
  );
}

export default App;

