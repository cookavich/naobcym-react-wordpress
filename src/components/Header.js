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
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        {/*<li><Link to='/schedule'>Schedule</Link></li>*/}
                    </ul>
                </nav>
            </header>
        )

    }
}

export default Header;