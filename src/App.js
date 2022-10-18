import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App-header">
      <Header />
      <div className='middle'>
        <Navigation/>
        <Main />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
