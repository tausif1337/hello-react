import React, { Component } from "react";
import './world.css';
// class world extends Component {
//     state={
//         fruits:[
//             {name:'Guava', rate:'BDT 100'},
//             {name:'Mango', rate:'BDT 200'},
//             {name:'Apple', rate:'BDT 300'},
//             {name:'Orange', rate:'BDT 400'},
//             {name:'Grape ', rate:'BDT 500'},
//         ]
//     }
//     render(){
//         return(
//         <div>
//             <h1>1 KG {this.state.fruits[0].name} is {this.state.fruits[0].rate}</h1>
//             <h1>1 KG {this.state.fruits[1].name} is {this.state.fruits[1].rate}</h1>
//             <h1>1 KG {this.state.fruits[2].name} is {this.state.fruits[2].rate}</h1>
//             <h1>1 KG {this.state.fruits[3].name} is {this.state.fruits[3].rate}</h1>
//             <h1>1 KG {this.state.fruits[4].name} is {this.state.fruits[4].rate}</h1>
//         </div>
//         )
//     }
// }
class world extends Component {
    constructor(parameters) {
        super(parameters)
        this.state = {
            fruits: [
                { name: 'Guava', rate: 'BDT 100' },
                { name: 'Mango', rate: 'BDT 200' },
                { name: 'Apple', rate: 'BDT 300' },
                { name: 'Orange', rate: 'BDT 400' },
                { name: 'Grape ', rate: 'BDT 500' },
            ]
        }
    }
    clickHandler = () =>{
        console.log('Congrats')
        alert('Congrats')
    }
    render() {
        const style = {
            backgroundColor: 'orange',
            font: 'inherit',
            border: '2px solid maroon',
            padding: '10px',
            cursor: 'pointer'
        }
        return (
            <div>
                <button style={style} onClick={this.clickHandler}>Click</button>
                <h1 className="Card">1 KG {this.state.fruits[0].name} is {this.state.fruits[0].rate}</h1>
                <h1 className="Card">1 KG {this.state.fruits[1].name} is {this.state.fruits[1].rate}</h1>
                <h1 className="Card">1 KG {this.state.fruits[2].name} is {this.state.fruits[2].rate}</h1>
                <h1 className="Card">1 KG {this.state.fruits[3].name} is {this.state.fruits[3].rate}</h1>
                <h1 className="Card">1 KG {this.state.fruits[4].name} is {this.state.fruits[4].rate}</h1>
            </div>
        )
    }
}
export default world