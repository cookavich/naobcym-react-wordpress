import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class Header extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <header>
                <Link to="/">Home</Link>
            </header>
        )

    }
}

export default Header;