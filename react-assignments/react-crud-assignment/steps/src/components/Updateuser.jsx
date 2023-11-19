import { useState, useEffect } from "react";
import axios from "axios";

let Updateuser = () => {

    let [dbuser, setDbuser] = useState([]);
    let [euser, setEuser] = useState({firstname : "", lastname : "", email : "", _id : ""});

    let reload = () => {
        axios.get("http://localhost:5050/data")
        .then(res => setDbuser(res.data))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        reload();
    },[]);

    let updateDetailsChangeHandler = (event) => {
        setEuser({...euser, [event.target.id] : event.target.value });
    }

    let editClickHandler = (id) => {
        axios.get("http://localhost:5050/edit/"+id)
        .then(res => {setEuser(res.data); })
        .catch(err => console.log(err));
    }

    let updateUser = () => {
        axios.post("http://localhost:5050/edit/"+euser._id,euser)
        .then(res => {
            console.log(res.data.message);
            reload();
            setEuser({firstname: "", lastname : "", email : "", _id:""});
        })
        .catch(err => console.log(err));
        alert("user info updated successfully");

    }

    return <div>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input onChange={ updateDetailsChangeHandler } value={ euser.firstname } type="text" className="form-control" id="firstname" placeholder="First Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input onChange={updateDetailsChangeHandler } value={ euser.lastname } type="text" className="form-control" id="lastname" placeholder="Last Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">eMail</label>
                    <input onChange={updateDetailsChangeHandler } value={ euser.email } type="email" className="form-control" id="email" placeholder="eMail id"/>
                    <input value={ euser._id } type="hidden" />
                </div>
                <div className="mb-3">
                    <button onClick={updateUser} className="btn btn-primary">update</button>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SL #</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">eMail</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dbuser.map(({firstname, lastname, email, _id }, idx) => <tr key={_id}>
                                            <th scope="row">{idx}</th>
                                            <td>{firstname}</td>
                                            <td>{lastname}</td>
                                            <td>{email}</td>
                                            <td><button onClick={ () => editClickHandler(_id) } className="btn btn-warning">Edit</button></td>
                                        </tr>
                        )
                        }                    
                    </tbody>
                </table>
            </div> 
}

export default Updateuser;