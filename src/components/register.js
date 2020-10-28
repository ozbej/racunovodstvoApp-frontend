import React from 'react';
import Axios from 'axios';

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            lastName: '',
            email: '',
            telSt: '',
            password: '',
            title: '',
            davcnaSt: '',
            trr: '',
            maticnaSt: '',
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    register = () => {
        Axios.post('http://localhost:3001/api/register', {
            name: this.state.name,
            lastName: this.state.lastName,
            email: this.state.email,
            telSt: this.state.telSt,
            password: this.state.password,
            title: this.state.title,
            davcnaSt: this.state.davcnaSt,
            trr: this.state.trr,
            maticnaSt: this.state.maticnaSt,
        }).then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Registracija</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="name">Ime lastnika</label>
                            <input type="text" name="name" placeholder="Ime lastnika" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Priimek lastnika</label>
                            <input type="text" name="lastName" placeholder="Priimek lastnika" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email lastnika</label>
                            <input type="text" name="email" placeholder="E-mail" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telSt">Telefonska številka lastnika</label>
                            <input type="text" name="telSt" placeholder="Telefonska številka" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Geslo</label>
                            <input type="password" name="password" placeholder="Geslo" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Naziv računovodstva</label>
                            <input type="text" name="title" placeholder="Naziv računovodstva" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="davcnaSt">Davčna številka</label>
                            <input type="text" name="davcnaSt" placeholder="Davčna številka" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="trr">TRR</label>
                            <input type="text" name="trr" placeholder="TRR" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maticnaSt">Matična številka</label>
                            <input type="text" name="maticnaSt" placeholder="Matična številka" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn" onClick={this.register}>Registracija</button>
                </div>
            </div>
        )
    }

}