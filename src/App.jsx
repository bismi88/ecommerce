import About from './About'
import './App.css'
import Contact from './Contact';
import Heading from './Heading';
// import Rings from './Rings';

function App() {
  return (
    <>
      <div>
        <Heading />
        <About />
        {/* <Rings /> */}
        <div className='image'>
          <Contact />
        </div>
      </div>
    </>
  );

}

export default App
