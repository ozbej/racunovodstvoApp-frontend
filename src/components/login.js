import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            redirect: false
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    login = () => {
        Axios.post('http://localhost:3001/api/login', {
            email: this.state.email,
            password: this.state.password,
        }).then((response) => {
            if(response.data.message) this.setState({ loggedIn: false });
            else {
                this.setState({ loggedIn: true });
                this.setState({ redirect: true });
            }
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/',
                state: {loggedIn: true},
            }} />
        }
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Prijava</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="E-mail" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Geslo</label>
                            <input type="password" name="password" placeholder="Geslo" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn" onClick={this.login}>Prijava</button>
                </div>
                {(this.state.loggedIn) ? "Prijavljeni ste": "Niste prijavljeni"}
            </div>
        )
    }

}