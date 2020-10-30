import React from 'react';
import { Menu, Button } from 'antd';
import { withRouter } from "react-router-dom";

const { SubMenu } = Menu;

class Navigation extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        current: 'home',
      };
    }

    handleClick = e => {
        this.setState({ current: e.key });
    };

    login = () => {
        this.props.history.push("/login");
    }

    logout = () => {
        localStorage.clear();
        this.props.history.push("/");
    }

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
                <Menu.Item key="home">
                <a href="/">
                    Domov
                </a>
                </Menu.Item>
                <Menu.Item key="app" disabled>
                Navigation Two
                </Menu.Item>
                <SubMenu key="SubMenu" title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu>
                {(localStorage.getItem("racunovodstvoId") == null) 
                    ? 
                    <Menu.Item key="login" onClick={this.login}>
                        Prijava
                    </Menu.Item>
                    :
                    <Menu.Item key="logout" onClick={this.logout}>
                        Odjava
                    </Menu.Item>
                }
                
            </Menu>
        )
    }
}

export default withRouter(Navigation);