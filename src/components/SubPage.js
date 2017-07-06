import React from 'react';
import {withRouter} from "react-router-dom";

class SubPage extends React.Component {
    constructor() {
        super();
        this.state = {
            page: []
        }
    }

    componentWillMount() {
        let pageURL = `http://naobcyouth.org/wp-json/wp/v2/pages?slug=${this.props.match.params.slug}`;
        fetch(pageURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    page: res
                })
            })
    }

    shouldComponentUpdate() {
        if (this.props.update){
            this.render();
            return true;
        }
        return false;
    }

    render() {
        return (
            <div>
                {this.state.page.map(content => {
                    return (
                        <div key={content.id} className="subPage">
                            <h1>{content.title.rendered}</h1>
                            <div dangerouslySetInnerHTML={{__html: content.content.rendered}}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withRouter(SubPage);