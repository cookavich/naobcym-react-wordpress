import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            pages: []
        }
    }

    componentDidMount() {
        let dataURL = 'http://naobcyouth.org/wp-json/wp/v2/pages';

        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pages: res
                })
            })
    }

    render() {
        return (
            <header>
                <nav>
                    <div className="logo"><Link to="/">NAOBCYM</Link></div>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                    </ul>
                </nav>
            </header>
        )

    }
}

export default Header;