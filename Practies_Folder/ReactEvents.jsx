class My extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Hello World!' };
    }

    handler() {
        this.setState({ name: 'Hello World' });
    };

    handler= () =>{
        this.setState({ name: 'Hello World' });
    };

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.handler}>Click Me</button>
            </div>
        );
    }
}
