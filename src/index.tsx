import React from 'react';
import ReactDOM from 'react-dom/client';

interface AppProps {
    color?: string;
}

interface AppState {
    counter: number;
}

class App extends React.Component<AppProps, AppState> {

    // state ={
    //     counter: 0
    // }
    constructor(props: AppProps){
        super(props);
        this.state = {
            counter: 0
        }
    }

    onUp = (): void =>{
        this.setState({counter: this.state.counter+1})
    }
    onDown = (): void =>{
        this.setState({counter: this.state.counter-1})
    }

    render(){
        return (
            <div>
                <button onClick={this.onUp}>+</button>
                {this.state.counter}
                <button onClick={this.onDown}>-</button>
            </div>
        )
    }
}

ReactDOM.createRoot(document.getElementById('root')!)
.render(<App ></App>);
// .render(<App color="green"></App>);