import {createRoot} from "react-dom/client";
import React from "react";
import FirstComp from "./components/App";
import App from "./components/App";

// element
// let ele = React.createElement("h1",null,"welcome to your life");
// createRoot(document.getElementById("root")).render(ele);

// class based component
// class FirstComp extends Component{
//     render(){
//         return <h1>welcome to your life</h1>
//     }
// }
// createRoot(document.getElementById("root")).render(<FirstComp/>);

// function based component
// let SecondComp = function(){
//     return <h1>welcome to your life</h1>
// }
createRoot(document.getElementById("root")).render(<App/>)