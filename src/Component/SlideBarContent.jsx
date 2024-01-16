import BtnTweet from "./BtnTweets"
function SlideBarContent() {
    return (
        <>

            <div className="slideBarContent">
                <div className='navagation'>
                    <div className='menuBtnNormal' ><span><img src="src/assets/Icons/Twitter.svg" alt="" /></span></div>
                    <div className='menuBtnNormal'><img src="src/assets/Icons/Home-Fill.svg" alt="" /><span>Home</span></div>
                    <div className='menuBtnNormal'><img src="src/assets/Icons/Explore.svg" alt="" /><span><span>Explore</span> </span></div>
                    <div className='menuBtnNormal'><img src="src/assets/Icons/Notifications-Fill.svg" alt="" /><span><span>Notifications</span> </span></div>
                    <div className='menuBtnNormal'><img src="src/assets/Icons/Messages-Fill.svg" alt="" /><span><span>Messages</span> </span></div>
                    <div className='menuBtnNormal'><img src="src/assets/Icons/Messages-Fill.svg" alt="" /><span><span>Bookmarks</span> </span></div>
                    <div className='menuBtnNormal'><img src="src/assets/Icons/Lists.svg" alt="" /><span> </span><span>Lists</span></div>
                    <div className='menuBtnNormal'><img src="src/assets/Icons/Profile-Fill.svg" alt="" /><span><span>Profile</span> </span></div>
                    <div className='menuBtnNormal'><img src="src/assets/Icons/More.svg" alt="" /><span><span>More</span> </span></div>
               
                    <BtnTweet classTweet ="btnTwtXI" />
                </div>
                <div className="slidBfooter">
                    <div className="contentfooter">
                    <img src="src/assets/react.svg" alt="" />
                    <div>
                        <div className="contentfooter"><span>Bradley Ortiz</span><img src="src/assets/Icons/Private.svg" alt="" /></div>
                        <span>@bradley</span>
                    </div>
                    </div>
                    <img src="src/assets/Icons/More-2.svg" alt="" />

                </div>
            </div>

        </>
    )

}



export default SlideBarContent