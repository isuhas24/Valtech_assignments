import React from "react";
import { Component } from "react";
import HeaderComp from "./header";
import MainComp from "./main";

class App extends React.Component{
    render(){
        return <div>
            <HeaderComp/>
            <MainComp/>

        </div>
    }
}

export default App;