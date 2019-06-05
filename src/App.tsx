import { Icon, Layout, Menu } from 'antd';
import React, { PureComponent } from 'react';
import logo from './logo.svg';

import { Router, Link, Route } from "react-router-dom";
import './App.css';
import routerConfig from '@/routes'
const { Header, Sider, Content } = Layout;



export interface AppProps { title: string }

export default class App extends PureComponent<AppProps, { collapsed: boolean }>{

  constructor(props: Readonly<AppProps>) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  private toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  public render() {
    const { collapsed } = this.state

    return (
      <Layout style={{ height: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
            <Menu.Item key="3">
              <Link to="/">
                <Icon type="upload" />
                <span>首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/page/edit">
                <Icon type="video-camera" />
                <span>编辑</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            <Router routes={routerConfig} />

          </Content>
        </Layout>
      </Layout>
    );
  }

}




/* const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App; */
