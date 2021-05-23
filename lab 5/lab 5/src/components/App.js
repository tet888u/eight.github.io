
import '../style/App.css';
import Head from './Title.js'
import Singleverb from './Singleverb.js'
import MainDetails from './MainDetails.js'
import Button from './Button2.js'

const Title = () =>{
  return(
    <div className="Titleof">
      <h1>Name & Title</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Title/>
      </div>
      <Head />
      <div>
        <Singleverb />
      </div>
      <div>
        <MainDetails />
      </div>
      <div className="viewButtons"><Button/>
                </div>
    </div>
  );
}

export default App;
