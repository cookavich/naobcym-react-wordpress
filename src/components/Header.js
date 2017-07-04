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
                <nav>
                    <div className="logo"><a href="naobcyouth.org">NAOBCYM</a></div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </nav>
            </header>
        )

    }
}

export default Header;