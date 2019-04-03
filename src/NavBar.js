import React, {
    Component
} from 'react';
import {
    Link
} from "react-router-dom";
class NavBar extends Component {
    render() {
        return (
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/chart">Chart</Link>
            </li>
            <li>
                <Link to="/addForm">Add Form</Link>
            </li>
            </ul>
        );
    }

};

export default NavBar;