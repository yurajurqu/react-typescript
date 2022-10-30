import React from 'react';
import ReactDOM from 'react-dom/client';

interface Props {
    color?: string;
}

class App extends React.Component<Props> {
    render(){
        return <div>{this.props.color}</div>
    }
}

ReactDOM.createRoot(document.getElementById('root')!)
.render(<App ></App>);
// .render(<App color="green"></App>);