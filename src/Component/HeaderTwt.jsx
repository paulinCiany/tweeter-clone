import { Link } from "react-router-dom"
function HeaderTwt() {
    return (
        <>
            <div className="header ">
                <h3><Link to='/' className="colorWhite">
                    Home
                </Link>
                </h3>
                <img src="src/assets/Icons/Timeline-Prop.svg" alt="user pic" />
            </div>
        </>
    )
}
export default HeaderTwt