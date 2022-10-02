
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Indonesia from "./components/Indonesia"
import './style/landingPage.css'

function App () {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
        <NavigationBar/>
        <Intro/>
      </div>
      {/* end of intro */}
      {/* trending section */}
      <div className='Trending'>
        <Trending/>
      </div>
      {/* end of trending section */}
       {/* Indonesia section */}
       <div className='Indonesia'>
        <Indonesia/>
      </div>
      {/* end of Indonesia section */}
    </div>
  )
}   
export default App
