import React, { Component } from "react";
import './world.css'

class twoWayDataBinding extends Component {
    state = {
        name: 'Md. Tausif Hossain'
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
        render(){
            
            return (
                <div>
                    <input type="text" onChange={this.changeName} value={this.state.name} />
                    <h1 className="Card">Hello {this.state.name}</h1>
                </div>
            )
        }

}

export default twoWayDataBinding