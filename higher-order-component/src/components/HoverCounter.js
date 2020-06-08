import React, {Component} from 'react';
import withCounter from "./withCounter";

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
                <h3 onMouseOver={incrementCount}>Hovered over {count} times</h3>
        )
    }

}

export default withCounter(HoverCounter);
