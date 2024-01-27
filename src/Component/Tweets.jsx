import { Link } from "react-router-dom"
import TweetAction from "./TweetActions"
function Tweets({ MyTweet }) {

    return (
        <>
            {/* <div className="tweets borderBotton">
                
                    <img src='src/assets/image 1.jpg' alt="follow picture" className="follPic" />
            
                <div className="followData">
                    <div className="tweet-title">
                        <div className="tweet-title-details"><h3 >nhgnghfrkrnnf <img src='' alt="" className="" /> </h3></div>
                        <div><span>@ CNN</span></div>
                    </div>
                    <div className="userPublMsg">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis quam repellendus ut aspernatur illum illo distinctio deserunt sunt, reprehenderit consectetur ipsa quia magni, iusto officiis nam odit suscipit labore?</p>
                    </div>
                    <div className="tweet-action">
                        <button className="tweetActionSyle" ><img src="src/assets/Icons/Reply.svg" alt="" /><span className="colorWhite">{MyTweet.replies}</span></button>
                        <button className="tweetActionSyle" ><img src="src/assets/Icons/Retweet.svg" alt="" /><span className="colorWhite">{MyTweet.replies}</span></button>
                        <button className="tweetActionSyle" ><img src="src/assets/Icons/React.svg" alt="" /><span className="colorWhite">{MyTweet.replies}</span></button>
                        <button className="tweetActionSyle" ><img src="src/assets/Icons/Share.svg" alt="" /><span className="colorWhite">{MyTweet.replies}</span></button>
                    </div>

                </div>
            </div> */}


            <div className="tweets borderBotton">
                <Link to='/ProfileUser'>
                <img src={MyTweet.author_avatar} alt="follow picture" className="follPic" />
                </Link>

                <div className="followData">
                    <div className="tweet-title">
                        <div className="tweet-title-details"><h3 >{MyTweet.source} <img src={MyTweet.isVerified} alt="" className="" /> </h3></div>
                        <div><span>{MyTweet.date}</span></div>
                    </div>
                    <div className="userPublMsg">
                        <p>{MyTweet.text}</p>
                        {
                            MyTweet.image?
                            <img src={MyTweet.image} alt="" className="tweetImgSize" />:''
                        }
                    </div>
                    <TweetAction tab={MyTweet} />

                </div>
    
            </div>
        </>
    )

}



export default Tweets