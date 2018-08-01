import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Menu, Breadcrumb,
} from 'antd';
import { Link } from 'react-router-dom';
import Routes from 'Router';


const { Header, Content, Footer } = Layout;

class AppLayout extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

toggle = () => {
  this.setState(prevState => (
    {
      collapsed: !prevState.collapsed,
    }
  ));
}

render() {
  const { user } = this.props;
  return (
    <Layout className="applayout layout">
      <Header>
        <Link href="/" to="/">
          <div className="logo" />
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link href="/profile" to="/profile">
              Profile
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/about" to="/about">
              About us
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/todo" to="/todo">
              Todo
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            List
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            App
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="applayout--content">
          <Routes shouldRender user={user} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
          Hannad Rehman ©2019
      </Footer>
    </Layout>
  );
}
}

export default AppLayout;
