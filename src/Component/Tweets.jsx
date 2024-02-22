import { Link } from "react-router-dom"
import TweetAction from "./TweetActions"
function Tweets({ MyTweet }) {

    return (
        <>

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