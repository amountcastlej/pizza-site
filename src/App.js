import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const headerInfo = ([
  {"company" : "Adam's Website",
  "home" : "Home",
  "about" : "About",
  "contact" : "Contact"
}
])

const footerInfo = ([
  {
    "copyright": "Copyright: 2022 Adam Joines",
    "site" : "www.seinstitute.com",
    "gh" : "amountcastlej"
  }
])

function App() {
  return (
    <div className="App-header">
      {
        headerInfo.map((info, i)=>{
          return<Header 
          key={i}
          company={info.company}
          home={info.home}
          about={info.about}
          contact={info.contact}
          />
        })
        
      }
      <div className='middle'>
        
        <Navigation/>
        <Main />
      </div>
      {
        footerInfo.map((info, i)=>{
          return <Footer
          key={i}
          copyright={info.copyright}
          site={info.site}
          gh={info.gh}
          />
        })
      
      }
    </div>
  );
}

export default App;
