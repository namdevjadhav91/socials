import React from 'react';
// import Navbar from '../../library/components/Navbar';
import Navbar from '../../../../library/components/Navbar';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar />
                <h1>Counter!</h1>
            </div>
        )
    }
}
export default React.memo(Counter);