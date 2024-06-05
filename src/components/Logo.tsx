import logo from "./Images/logo.svg"
function Logo(){
    return(
            <div className="logos">
                <img src={logo} className="logo" alt="logo" />
                <div className="logo-texts">
                        <h4 className="logo-text">Sigma Club</h4>
                        <h5 className="logo-text1">Since 1950</h5>
                    </div>
            </div>
    )
}
export default Logo