import react from "react"

function RightPage () {
    return (
       <div className="rightpage">
       <h2>Your Pages and profiles</h2>
        <div className="right_1">
        <div className="left_1">
            <img className="me_left" src="me.jpg"></img><span>BrightWeb</span>
        </div>
        <div className="right_2">
        <div className="left_1">
        <img className="me_left" src="dash.png"></img><span>Dashboard</span>
        </div>
        <div className="left_1">
        <img className="me_left" src="bio.png"></img><span> My Bio</span>
        </div>
        <div className="left_1">
        <img className="me_left" src="add.png"></img><span>My Address</span>
        </div>
        </div>
        <div>
        <hr></hr>
        <div className="">
        <h2>Friend Request</h2>
        <div className="middle3_4">
            <img src="two.jpeg"></img>
            <div className="middle3_5">
                <h5>sharon Wilton</h5>
                <button>Confirm</button>
                <button>Delete</button>
            </div>
            </div>
            </div>
            <div className="">
            <h2>Friends</h2>
            <div className="right_3">
            <div className="left_1">
            <img className="me_left" src="one.jpeg"></img><span> Olivia Noah </span>
            </div>
            <div className="left_1">
            <img className="me_left" src="one.jpeg"></img><span> Henry Lucas</span>
            </div>
            <div className="left_1">
            <img className="me_left" src="one.jpeg"></img><span> Benj Williams</span>
            </div>
            <div className="left_1">
            <img className="me_left" src="one.jpeg"></img><span> James Lucas</span>
            </div>
            </div>
            <hr></hr>
            <div className="right_4">
            <h2>Group Conversation</h2>
            <div className="left_1">
            <img className="me_left" src="pluss.png"></img><span> Create New Group</span>
            </div>
            </div>
            

            </div>
        </div>


        </div>
       </div>
    )
}

export default RightPage;