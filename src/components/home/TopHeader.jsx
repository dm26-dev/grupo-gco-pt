export const TopHeader = ({ handleLogout, logo }) => {
 
    return (
        <div className="container__top_header">

            <div className="container__top_header_logo">
                <img src={logo} alt="logo-esprit" />                
            </div>

            <div className="container__top_header_btn">
                <button onClick={handleLogout} >
                    logout
                </button>
            </div>
            
        </div>
    )
}
