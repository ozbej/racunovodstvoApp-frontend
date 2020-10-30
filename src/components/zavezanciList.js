import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class ZavezanciList extends React.Component {

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
            <div className="base-container">
                
            </div>
        )
    }

}