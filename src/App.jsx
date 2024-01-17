import { Routes, Router } from 'react-router-dom'
import './App.css'
import Timeline from './Component/Timeline'
import SlideBarContent from './Component/SlideBarContent'
import Trend from './Component/Trend'
import Card from './Component/Card'
import AccountFollow from './Component/AccountFollow'


function App() {




  return (
    <>
      <div className='container'>
        <section className="slideBar">
          <SlideBarContent />

        </section>

        <section className="timeLine">

          <Timeline />

        </section>

        <section className="trendSect">
          <div className='thirdSect'>
            <input className='inputSearch' type="text" name="search" placeholder=" Search Twiter" />


            <Card>
              <div className='trendList'>
                <div className='trendforyou'>
                  <h3>Trends for you</h3>
                  <img src="src/assets/Icons/Settings.svg" alt="" />
                </div>
              </div >
              <Trend />
            </Card>

            <Card>
              <h3>Who to follow</h3>

              <AccountFollow />
              <AccountFollow />
              <AccountFollow />


              <div>
                <a href="" className='blueColre'>Show more</a>
              </div>
            </Card>


          </div>
        </section>

      </div>

    </>
  )
}

export default App
