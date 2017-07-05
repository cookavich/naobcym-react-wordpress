import React from 'react';

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

    render() {
        return (
            <div>
                {this.state.page.map(content => {
                    return (
                        <div>
                            <h1>{content.title.rendered}</h1>
                            <div dangerouslySetInnerHTML={{__html: content.content.rendered}}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SubPage;