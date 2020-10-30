import React from 'react';
import Axios from 'axios';
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Divider, Select } from 'antd';
import Navigation from './navigation'
import '../styles/login.css'
import '../styles/home.css'

import { Typography } from 'antd';
const { Title, Link } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
wrapperCol: { offset: 8, span: 16 },
};

const { Option } = Select;

class AddZavezanec extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            kraji: [],
            kraj: '',
        }
    }

    onChangeKraj = value => {
        this.setState({kraj: value});
    }

    async componentDidMount() {
        Axios.get('http://localhost:3001/api/getKraji').then((response) => {
            this.setState({kraji: response.data});
        });
    }

    add = values => {
        Axios.post('http://localhost:3001/api/addZavezanec', {
            racunovodstvoId: localStorage.getItem('racunovodstvoId'),
            krajId: this.state.kraj,
            nazivPodjetja: values.title,
            ime: values.name,
            priimek: values.lastName,
            ulica: values.streetName,
            hisnaSt: values.streetNum,
            davcnaSt: values.davcnaSt
        }).then((response) => {
            console.log(response);
        });
    }

    render() {
        if(localStorage.getItem("racunovodstvoId") == null)
            return (
                <div className="home-container">
                    <Navigation />
                    <Title>Domov</Title>
                    <Title level={2}>Za nadaljevanje se prijavite</Title>
                </div>
            )
        return (
            <div>
                <Navigation />
                <div className="login-container">
                    <p style={{marginTop: '5vh'}}>
                        <Title>Dodaj zavezanca</Title>
                    </p>
                    <div className="login-form">
                        <Form
                        {...layout}
                        name="basic"
                        onFinish={this.add}
                        initialValues={{ remember: true }}
                        >
                            <Form.Item
                            label="Naziv podjetja"
                            name="title"
                            rules={[{ required: true, message: 'Vnesite naziv podjetja!' }]}
                            >
                            <Input />
                            </Form.Item>
                    
                            <Form.Item
                            label="Ime"
                            name="name"
                            rules={[{ required: true, message: 'Vnesite ime!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="Priimek"
                            name="lastName"
                            rules={[{ required: true, message: 'Vnesite priimek!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="Ulica"
                            name="streetName"
                            rules={[{ required: true, message: 'Vnesite ulico!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="Hišna številka"
                            name="streetNum"
                            rules={[{ required: true, message: 'Vnesite hišno številko!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item label="Kraj">
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                optionFilterProp="children"
                                onChange={this.onChangeKraj}
                                filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }>
                                {this.state.kraji.map(kraj => 
                                    <Select.Option value={kraj.id}>{kraj.ime}</Select.Option>
                                )}
                            </Select>
                            </Form.Item>

                            <Form.Item
                            label="Davčna številka"
                            name="davcnaSt"
                            rules={[{ required: true, message: 'Vnesite davčno številko!' }]}
                            >
                            <Input />
                            </Form.Item>
                    
                            <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Dodaj
                            </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <Divider />
                    <p>Nazaj <Link href='/'>domov</Link>.</p>
                </div>
            </div>
        )
    }
}

export default withRouter(AddZavezanec);