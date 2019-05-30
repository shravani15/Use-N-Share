import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from  'react-router-dom';
import { Layout, Menu, Breadcrumb,Button, Icon, Input, notification } from 'antd';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Signin from './Components/Signin';
import Nav from './Components/Nav';
import Review from './Components/Review';
import Details from './Components/Details';
import ProductUpload from './Components/UploadItem'
// import Product from './Components/Product';
import Chat from './Components/Chat';
import Messages from './Components/Messages';
import './App.css';
import './layout.css'
import { timingSafeEqual } from 'crypto';


const Search = Input.Search;

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

class App extends Component {
  constructor (props){
        super(props);
         this.state = {
          value: '',
          isSignedIn: false
        }
      }
      handleChange=(e)=>{
        this.setState({
          value: e.target.value
        })
      }
    
      handleMenuClick=(e)=>{
        console.log('click', e);
      }

      
      

  render () {
    
    return(
      <BrowserRouter>
<Layout>
<Header className="header">
  <div className="logo" />
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['2']}
    style={{ lineHeight: '64px' }}
  > 
    <Menu.Item key="1"> USE N SHARE (RENTAL) </Menu.Item>
      <Menu.Item key="2">
        <span>Home</span> 
        <Link to="/" />
      </Menu.Item>
    <Menu.Item key="3"> 
    <span>Upload</span>
    <Link to="/upload" />
     </Menu.Item>
     <Menu.Item key="4">
        <span>Login</span>
        <Link to="/signin" />
    </Menu.Item>
    <Menu.Item key="5">
      <span>Messages</span>
      <Link to="/messages" />
    </Menu.Item>
    <Menu.Item key="6"> 
    <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item align="right"> 
     <Button type="primary" onClick={openNotification}>
        Notifications
     </Button> 
     </Breadcrumb.Item>
  </Breadcrumb>
    </Menu.Item>
    
    
    {/* <Menu.Item align="center"> 
    <Search placeholder="Search here" onSearch={value => console.log(value)} enterButton />
     </Menu.Item> */}

    {/* <Search
      placeholder="input search text"
      enterButton="Search"
      // size="large"
      onSearch={value => console.log(value)}
    /> */}
    {/* <Button type="primary" icon="search"> Search </Button> */}
    
      </Menu>
      
</Header>
<Content style={{ padding: '0 50px' }}>
  
  <Layout style={{ padding: '24px 0', background: '#fff' }}>
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        // style={{ height: '100%' }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              Categories
            </span>
          }
        >
          <Menu.Item key="7"> Clothing </Menu.Item>
          <Menu.Item key="8"> Hand Bags</Menu.Item>
          <Menu.Item key="9"> Jewelery </Menu.Item>
        </SubMenu>
        <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="link" />
            Select City
          </span>
        }
        >
          <Menu.Item key="10"> Mumbai </Menu.Item>
          <Menu.Item key="11"> Delhi</Menu.Item>
          <Menu.Item key="12"> Bangalore </Menu.Item>
          <Menu.Item key="13"> Hyderabad </Menu.Item>
          <Menu.Item key="14"> Chennai</Menu.Item>
          <Menu.Item key="15"> Kolkata </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Content style={{ padding: '0 24px', minHeight: 280 }}> 
      
      <div>
         <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/signin" component={Signin} />
            <Route path="/profile" component={Profile} />
            <Route path="/review" component={Review} />
            <Route path="/details" component={Details}/>
            <Route path="/upload" component={ProductUpload}/>
            <Route path="/messages" component={Messages} />
            <Route path="/chat" component={Chat} />
        </Switch>
       </div> 
      
   </Content>
  </Layout>
</Content>
<Footer style={{ textAlign: 'center' }}> Use N Share ©2019 Created by Pranuthi, Meghana, Shravani</Footer>
</Layout>
</BrowserRouter>
);
}
}
export default App;

