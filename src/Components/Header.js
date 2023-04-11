import react from "react"


function Header() {
    return (
        <div className="head">
        <div className="header">
            <div className="header_1">
                <img src="Dee2.png"></img>
                <input placeholder=" 🔍 Search Deebook"></input>
            </div>
            <div className="header_2">
                <img className="header_icon" src="home.png"></img>
                <img className="header_icon" src="tv.png"></img>
                <img className="header_icon" src="market.png"></img>
                <img  className="header_icon" src="frnd.jpg"></img>
                <img  className="header_icon" src="game.png"></img>

            </div>
            <div className="header_3">
                 <div className="header_icon1">
                 <img className="header_icon2" src="menu.png"></img>
                 </div>
               
                <div className="header_icon1">
                <img className="header_icon2" src="mess.png"></img>
                </div>
                
                <div className="header_icon1">
                <img className="header_icon2" src="notif.png"></img>
                </div>

                <div className="">
                <img className="header_me" src="me.jpg"></img>
                </div>

            </div>
        </div>
        </div>

    )
}

export default Header;