import { Component } from "react";
// import "../style.css";
import axios from "axios";
 
class App extends Component{
    state = {
        users : []
    }

    componentDidMount(){
        axios.get("https://reqres.in/api/users?page=1")
        .then(res => this.setState({users : res.data.data}))
        .catch(err => console.log("error:",err));
    }

    render(){
        return <div>
                    <h1>USING JAVASCRIPT</h1>
                    <hr />
                    <ol>
                        {this.state.users.map(val =>  <li style={{ backgroundColor : val.id%2===0 ? "grey" : "brown" }} key={val.id} >{val.first_name} <img width="100px" src={val.avatar} alt=""/></li>  )} 
                    </ol>
        </div>
    }
}
 
export default App;