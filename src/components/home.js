import React from 'react';
import Navigation from './navigation'
import 'antd/dist/antd.css';
import '../styles/home.css'
import Axios from 'axios';

import { Typography, Divider, Button, Card } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
const { Title } = Typography;


export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            zavezanci: [],
        };
    }

    async componentDidMount() {
        Axios.get('http://localhost:3001/api/getZavezanci',
        { params: { racunovodstvoId: localStorage.getItem('racunovodstvoId') } }
        ).then((response) => {
            this.setState({zavezanci: response.data})
            console.log(this.state.zavezanci)
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
            <div className="home-container">
                <Navigation />
                <Title>Domov</Title>
                <Title level={2}>Domača stran aplikacije</Title>
                <Divider />
                <div className="zavezanci-container">
                    <Title level={2}>Vaši zavezanci</Title>
                    <div className="zavezanci-box">
                        {this.state.zavezanci.map(zavezanec => {
                            return (
                                <Card className="zavezanec-card" title={zavezanec.naziv_podjetja} extra={<a href="#">Več</a>} style={{ width: 300 }}>
                                <p>{`${zavezanec.ime} ${zavezanec.priimek}`}</p>
                                </Card>
                            )
                        })}
                    </div>
                    <Divider />
                    <Button type="primary" icon={<PlusCircleOutlined />} href='/addZavezanec'>Dodaj zavezanca</Button>
                </div>
            </div>
        )
    }

}