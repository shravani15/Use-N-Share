import React, { Component } from 'react'
import './layout.css'
import { Layout, Menu, Dropdown, Button, Icon, message } from 'antd';
import {Link} from 'react-router-dom';

const { Header } = Layout;

class Header extends Component{

  handleButtonClick =(e)=> {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  
  handleMenuClick=(e)=> {
    message.info('Click on menu item.');
    console.log('click', e);
  }

    render(){
      const menu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1"><Icon type="user" /> Clothes </Menu.Item>
          <Menu.Item key="2"><Icon type="user" /> Hand Bags </Menu.Item>
          <Menu.Item key="3"><Icon type="user" /> Jewelery </Menu.Item>
        </Menu>
      );
        return(
          <Layout className="layout">
            <Header >
              <div className="logo">
                <Link to = "/" className ="home">
                  <h3> Use N Share</h3>
                </Link> 
              </div>
              <Menu
              theme="dark"
              mode="horizontal"
              
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="0" align="left">
                  <Link to = "/" className ="home">
                    <b> USE N SHARE </b>
                  </Link>
                </Menu.Item>
                <Menu.Item key="1"align="right">
                  <Link to = "/productupload" className ="productupload">
                    Product Upload
                  </Link>
                </Menu.Item>
                <Menu.Item key="2"align="right">
                  <Dropdown overlay={menu}>
                    <Button type="primary" style={{ marginLeft: 8 }}>
                      Catogiries <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Menu.Item>
            </Menu>
            {/* </Router> */}
            </Header>
          // </Layout>

        );
    }
}

export default Header;