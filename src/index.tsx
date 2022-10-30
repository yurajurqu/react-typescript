import React from 'react';
import ReactDOM from 'react-dom/client';

interface AppProps {
    color?: string;
}
const App = (props: AppProps) : JSX.Element => {
    return (<div>{props.color}</div>)
}

// class App extends React.Component<AppProps> {
//     state = {
//         counter: 0
//     }
   

//     onUp = (): void =>{
//         this.setState({counter: this.state.counter+1})
//     }
//     onDown = (): void =>{
//         this.setState({counter: this.state.counter-1})
//     }

//     render(){
//         return (
//             <div>
//                 <button onClick={this.onUp}>+</button>
//                 {this.state.counter}
//                 <button onClick={this.onDown}>-</button>
//             </div>
//         )
//     }
// }

ReactDOM.createRoot(document.getElementById('root')!)
// .render(<App ></App>);
.render(<App color="green"></App>);