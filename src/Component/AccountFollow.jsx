function AccountFollow() {
    return (
        <>
            <div className='flexRow AccountFllw'>
                <img src="src/assets/Profile-Photo.svg" alt="flexRow" />
                <div className='flexRow'>
                    <div className='flexColumn'>
                        <span>The New work Time</span>
                        <span>@nytimes</span>
                    </div>
                    <img src="src/assets/Icons/Verified.svg" alt="" className='iconSize' />
                </div>
                <button className='btnFllw'>Follow</button>
            </div>
        </>
    )
}
export default AccountFollow