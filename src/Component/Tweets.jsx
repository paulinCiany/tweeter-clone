function Tweets({MyTweet}) {

    return (
        <>
            <div className="tweets borderBotton">
                
                 <img src={MyTweet.author_avatar} alt="follow picture" className="follPic" />
            
                <div className="followData">
                    <div className="tweet-title">
                        <div className="tweet-title-details"><h3 >{MyTweet.source} <img src={MyTweet.isVerified} alt="" className="" /> </h3></div>
                        <div><span>{MyTweet.date}</span></div>
                    </div>
                    <div className="userPublMsg">
                        <p>{MyTweet.text}</p>
                        <img src={MyTweet.image} alt="" className="tweetImgSize" />
                    </div>
                    <div className="tweet-action">
                        <div className="align-tweetAction"><button className="tweetActionSyle"><img src="src/assets/Icons/Reply.svg" alt="" /></button><span>{MyTweet.replies}</span></div>
                        <div className="align-tweetAction"><button className="tweetActionSyle"><img src="src/assets/Icons/Retweet.svg" alt="" /></button><span>{MyTweet.retweets}</span></div>
                        <div className="align-tweetAction"><button className="tweetActionSyle"><img src="src/assets/Icons/React.svg" alt="" /></button><span>{MyTweet.favorites}</span></div>
                        <div className="align-tweetAction"><button className="tweetActionSyle"><img src="src/assets/Icons/Share.svg" alt="" /></button><span></span></div>
                    </div>
                    

                </div>

            </div>
        </>
    )

}



export default Tweets