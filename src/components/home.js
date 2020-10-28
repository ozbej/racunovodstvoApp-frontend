import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
        }

    }

    componentDidMount(props){
        //console.log("loggedIn", this.props.location.state.loggedIn);
        if (this.props.location.state === undefined) console.log("Nisi loggedIn");
        else this.setState({ loggedIn: true });
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <h1>Home page</h1>
                {(this.state.loggedIn) ? "Prijavljeni ste" : "Za nadaljevanje se prijavite"}
            </div>
        )
    }

}