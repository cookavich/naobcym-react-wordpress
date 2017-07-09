class MarkdownTextarea extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onValueChange(e.target.value);
    }

    render() {
        return <textarea value={this.props.value} onChange={this.handleChange} />;
    }
}

class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let markdown = marked(this.props.value)
        return <div dangerouslySetInnerHTML={{__html: markdown}}/>;
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: `### Try processing markdown
See [Daring Fireball](https://daringfireball.net/projects/markdown/basics) for formatting`
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <div className="app">
                <MarkdownTextarea
                    value={this.state.value}
                    onValueChange={this.handleValueChange}
                />
                <MarkdownPreviewer value={this.state.value} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
