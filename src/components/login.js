import React from 'react';
import Axios from 'axios';
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Divider } from 'antd';
import Navigation from './navigation'
import '../styles/login.css'

import { Typography } from 'antd';
const { Title, Link } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
wrapperCol: { offset: 8, span: 16 },
};

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    login = values => {
        Axios.post('http://localhost:3001/api/login', {
            email: values.email,
            password: values.password,
        })
        .then((response) => {
            if(!response.data.message) {
                localStorage.setItem('racunovodstvoId', response.data.id);
                this.props.history.push("/");
            }
        });
    }

    render() {
        if ((localStorage.getItem("racunovodstvoId") != null)) return <Title level={2}>Ste že prijavljeni. Nazaj <Link href="/">domov</Link>.</Title>
        return (
            <div>
                <Navigation />
                <div className="login-container">
                    <p style={{marginTop: '5vh'}}>
                        <Title>Prijava</Title>
                    </p>
                    <div className="login-form">
                        <Form
                        {...layout}
                        name="basic"
                        onFinish={this.login}
                        initialValues={{ remember: true }}
                        >
                            <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Vnesite email!' }]}
                            >
                            <Input />
                            </Form.Item>
                    
                            <Form.Item
                            label="Geslo"
                            name="password"
                            rules={[{ required: true, message: 'Vnesite geslo!' }]}
                            >
                            <Input.Password />
                            </Form.Item>
                    
                            <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Prijava
                            </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <Divider />
                    <p>Še nimate računa? Registrirajte se <Link href='/register'>tukaj</Link>.</p>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);