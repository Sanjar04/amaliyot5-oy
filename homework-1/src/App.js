import './App.css';
import Header from './conponents/header/header';
import Hero from './conponents/hero/hero';
import Bassic from './conponents/bassic/bassic';
import Result from './conponents/result/result';
import Lactation from './conponents/lactation/lactation';
import Footer from './conponents/footer/footer';

function App() {
  return (
    <div className="App container">
      <Header/>
      <Hero/>
      <Bassic/>
      <Result/>
      <Lactation/>
      <Footer/>
    </div>
  );
}

export default App;
