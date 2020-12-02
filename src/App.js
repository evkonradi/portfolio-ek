import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Jubm from './components/Jumb';
import './index.css';


function App() {

  const [categories] = useState([
    { name: 'Home' , href: 'scrollToTop'},
    { name: 'What I Do' , href: 'scrollToExpertise'},
    { name: 'Projects', href: 'scrollToProjects'},
    { name: 'About Me', href: 'scrollToAbout' },
    { name: 'Contact', href: 'scrollToContact' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const renderPage = () =>{
  //   switch (currentCategory.name) {
  //     case 'What I Do' : 
  //       return <Resume />;
  //     case 'Projects' : 
  //       return <Portfolio />;
  //     case 'Contact' : 
  //       return <Contact />;
  //     default:
  //       return <About />;
  //   }
  // }

  return (
    <div className="font-main">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <Jubm></Jubm>
      <main>
        {/* <div>{renderPage()}</div> */}
        <div>
          <Resume></Resume>
          <Portfolio></Portfolio>
          <About></About>
          <Contact></Contact>
        </div>
      </main>
      <Footer></Footer>
   </div>
    
  );
}

export default App;

