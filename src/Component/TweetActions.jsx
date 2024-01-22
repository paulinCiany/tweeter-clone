
function TweetAction(MyTweet) {
    
    // function useLike() {
    //     const feed = useFeedContext()

    //     const toggleLike = async (activity, hasLikedTweet) => {
    //         await feed.onToggleReaction('like', activity)
    //     }

    //     return { toggleLike }
    // }


    return (
        <>

        <div className="tweet-action">
            <div className="align-tweetAction"><button className="tweetActionSyle" ><img src="src/assets/Icons/Reply.svg" alt="" /></button><span>{MyTweet.replies}</span></div>
            <div className="align-tweetAction"><button className="tweetActionSyle" ><img src="src/assets/Icons/Retweet.svg" alt="" /></button><span>{MyTweet.retweets}</span></div>
            <div className="align-tweetAction"><button className="tweetActionSyle" ><img src="src/assets/Icons/React.svg" alt="" /></button><span>{MyTweet.favorites}</span></div>
            <div className="align-tweetAction"><button className="tweetActionSyle"><img src="src/assets/Icons/Share.svg" alt="" /></button><span></span></div>
        </div>



    </>
    )
}
export default TweetAction