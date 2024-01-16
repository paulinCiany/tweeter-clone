import{Routes, Router} from 'react-router-dom'
import './App.css'
import Timeline from './Component/Timeline'
import SlideBarContent from './Component/SlideBarContent'
import Tweets from './Component/Tweets'
import BtnTweet from './Component/BtnTweets'
import Trend from './Component/Trend'


function App() {




  return (
    <>
      <div className='container'>
        <section className="slideBar">
          <SlideBarContent />

        </section>

        <section className="timeLine">

          <Timeline/>

        </section>

        <section className="trendSect">
          <div className='thirdSect'>
            <input className='inputSearch' type="text" name="search" placeholder="Search.." />

            <div className='card'>
              <div className='trendList'>
                <div className='trendforyou'>
                  <h3>Trends for you</h3>
                  <img src="src/assets/Icons/Settings.svg" alt="" />
                </div>
              </div >
              <Trend />

            </div>

          </div>
        </section>

      </div>

    </>
  )
}

export default App
