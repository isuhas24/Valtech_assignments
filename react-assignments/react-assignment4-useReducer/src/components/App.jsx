import { useReducer, useRef} from "react";
 
let App = () => {

        let firstname_ref = useRef();
        let lastname_ref = useRef();
        let email_ref = useRef();
        let phone_ref = useRef();

        let reducerFun = (state, action) => {
            switch(action.type){
                case "SET_FIRSTNAME": return {...state, firstname : action.payload }
                case "SET_LASTNAME" : return {...state, lastname : action.payload }
                case "SET_EMAIL" : return {...state, email : action.payload }
                case "SET_PHONE" : return {...state, phone : action.payload }
                default : return state;
            }
        }

        let [store, dispatch] = useReducer(reducerFun, { firstname : "", lastname : "", email : "", phone : "" })

        let clickHandler = () => {
            dispatch({type:"SET_FIRSTNAME" , payload:firstname_ref.current.value });
            dispatch({type:"SET_LASTNAME" , payload:lastname_ref.current.value });
            dispatch({type:"SET_EMAIL" , payload:email_ref.current.value });
            dispatch({type:"SET_PHONE" , payload:phone_ref.current.value});
        }

        return <div>
                    <h1>Form</h1>
                    <form action="#">
                        <div className="mb-3">
                            <label  htmlFor="fname" className="form-label">Enter first name:</label>
                            <input ref={firstname_ref}  type="text" className="form-control" id="fname" placeholder="first name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lname" className="form-label">Enter last name:</label>
                            <input ref={lastname_ref}   type="text" className="form-control" id="formGroupExampleInput" placeholder="last name" required/>
                        </div>
                        <div className="mb-3">
                            <label  htmlFor="uemail" className="form-label">Enter email:</label>
                            <input ref={email_ref}  type="email" className="form-control" id="formGroupExampleInput" placeholder="email" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="uphone" className="form-label">Enter phone Namenumber:</label>
                            <input ref={phone_ref}  className="form-control" id="formGroupExampleInput" placeholder="phone number" required/>
                        </div>
                        <button onClick={clickHandler} className="btn btn-primary">show data</button>
                    </form>


                <h2>User data:</h2>
                <h3>Firstname: {store.firstname}</h3>
                <h3>Lastname: {store.lastname}</h3>
                <h3>Email: {store.email}</h3>
                <h3>Phone: {store.phone}</h3>
        </div>
    
}

export default App;