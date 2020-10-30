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

class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    register = values => {
        Axios.post('http://localhost:3001/api/register', {
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            telSt: values.telSt,
            password: values.password,
            title: values.title,
            davcnaSt: values.davcnaSt,
            trr: values.trr,
            maticnaSt: values.maticnaSt,
        }).then((response) => {
            console.log(response);
        });
    }

    render() {
        if ((localStorage.getItem("racunovodstvoId") != null)) return <Title level={2}>Ste že prijavljeni. Nazaj <Link href="/">domov</Link>.</Title>
        return (
            <div>
                <Navigation />
                <div className="login-container">
                    <p style={{marginTop: '5vh'}}>
                        <Title>Registracija</Title>
                    </p>
                    <div className="login-form">
                        <Form
                        {...layout}
                        name="basic"
                        onFinish={this.register}
                        initialValues={{ remember: true }}
                        >
                            <Form.Item
                            label="Ime lastnika"
                            name="name"
                            rules={[{ required: true, message: 'Vnesite ime lastnika!' }]}
                            >
                            <Input />
                            </Form.Item>
                    
                            <Form.Item
                            label="Priimek lastnika"
                            name="lastName"
                            rules={[{ required: true, message: 'Vnesite priimek lastnika!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="Email lastnika"
                            name="email"
                            rules={[{ required: true, message: 'Vnesite email lastnika!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="Telefonska številka lastnika"
                            name="telSt"
                            rules={[{ required: true, message: 'Vnesite telefonsko številko lastnika!' }]}
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

                            <Form.Item
                            label="Naziv računovodstva"
                            name="title"
                            rules={[{ required: true, message: 'Vnesite naziv računovodstva!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="Davčna številka"
                            name="davcnaSt"
                            rules={[{ required: true, message: 'Vnesite davčno številko!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="TRR"
                            name="trr"
                            rules={[{ required: true, message: 'Vnesite TRR!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="Matična številka"
                            name="maticnaSt"
                            rules={[{ required: true, message: 'Vnesite matično številko!' }]}
                            >
                            <Input />
                            </Form.Item>
                    
                            <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Registracija
                            </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <Divider />
                    <p>Že imate račun? Prijavite se <Link href='/login'>tukaj</Link>.</p>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);