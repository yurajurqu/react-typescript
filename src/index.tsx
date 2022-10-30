import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
    render(){
        return <div>Hello</div>
    }
}

ReactDOM.createRoot(document.getElementById('root')!)
.render(<App></App>);