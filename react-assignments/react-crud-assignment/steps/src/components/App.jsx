import { useState } from "react";
import Adduser from "./Adduser";
import Updateuser from "./Updateuser";

let App = () => {

    return <div className="container">
                <h1>CRUD using React and MongoDB</h1>
                <hr />

                <button className="btn btn-primary" ><a href="#popup-box-adduser" style={{color:"white", textDecoration:"none"}}>add user</a></button> &nbsp;
                <button className="btn btn-primary" ><a href="#popup-box-updateuser" style={{color:"white", textDecoration:"none"}}>update user</a></button>

                <div>           
                    <div id="popup-box-adduser" className="modal">
                        <div className="content">
                            <Adduser/>
                            <a href="#" className="box-close">×</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div id="popup-box-updateuser" className="modal">
                        <div className="content">
                            <Updateuser/>
                            <a href="#" className="box-close">×</a>
                        </div>
                    </div>
                </div>

            </div>  
}

export default App;