import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    async componentDidMount(){
        const resp = axios.get('/api/test');

        console.log('Test Response:', resp);
    }
    render(){
        return(
            <h1>This is test component</h1>
        )
    }
}

export default Test;