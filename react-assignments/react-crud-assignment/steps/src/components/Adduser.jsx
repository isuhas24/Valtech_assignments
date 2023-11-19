import { useState, useEffect } from "react";
import axios from "axios";

let Adduser = () => {

    let [user, setUser] = useState({firstname : "", lastname : "", email : ""});
    let [dbuser, setDbuser] = useState([]);

    let reload = () => {
        axios.get("http://localhost:5050/data")
        .then(res => setDbuser(res.data))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        reload();
    },[]);

    

    let userDetailsChangeHandler = (event) => {
        setUser({...user, [event.target.id] : event.target.value });
    }

    let addNewUser = (event) => {
        axios.post("http://localhost:5050/data",user)
        .then(res => {
            console.log(res.data.message);
            reload();
            setUser({firstname: "", lastname : "", email : ""});
        
        })
        .catch(err => console.log(err));
    }

    return <div>
                <h2>Add A New User</h2>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input onChange={ userDetailsChangeHandler } value={ user.firstname } type="text" className="form-control" id="firstname" placeholder="First Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input onChange={userDetailsChangeHandler } value={ user.lastname } type="text" className="form-control" id="lastname" placeholder="Last Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">eMail</label>
                    <input onChange={userDetailsChangeHandler } value={ user.email } type="email" className="form-control" id="email" placeholder="eMail id"/>
                </div>
                <div className="mb-3">
                    <button onClick={addNewUser} className="btn btn-primary">Register</button>
                </div>


                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SL #</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">eMail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dbuser.map(({firstname, lastname, email, _id }, idx) => <tr key={_id}>
                                            <th scope="row">{idx}</th>
                                            <td>{firstname}</td>
                                            <td>{lastname}</td>
                                            <td>{email}</td>
                                        </tr>
                        )
                        }                    
                    </tbody>
                </table>

`           </div>
}

export default Adduser;