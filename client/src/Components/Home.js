import React from 'react';
import axios from "axios";
import { Button, Row, Col, Rate, Card } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Details from '../Components/Details';
import '../layout.css' 


class Home extends React.Component {
    constructor() {
      super();
      this.state={
        products:[],
        isLoaded: false,
      };
    }
    
    componentDidMount() {
      axios.get('http://localhost:5000/')
      .then(res => {
        console.log(res.data);
        this.setState(() => ({
          isLoaded: true,
          products: res.data
        }))
      })
      .catch(err => console.log(err));
    };
    render() {
      var { isLoaded, products} = this.state;
      if (!isLoaded) {
        return <div>Loading...</div>
      } 
        else {
        return(
          // <BrowserRouter>
             <div className="ProductList" style={{ textAlign: 'center' }}>
             <Row gutter={54} type="flex">
             {products.map(product => (
                   <Col span={8}>
                   <Card style={{ width: 400 }} bodyStyle={{ padding: 30, marginTop: 30, marginBottom: 30 }}>
                     <div className={product.product_id}>
                      <div height="300px" width="250px">
                      <img width="100%" height="100%" src={product.image} alt={product.description}></img>
                      </div><br/>
                        
                        <span text-align="center">{product.name} <br/></span>
                        <span text-align="center"> Rs. {product.price}</span><br/>
                        <span text-align="center">{product.address}</span><br/>
                        <Rate disabled allowHalf defaultValue={3.5} ></Rate><br/>
                        <Link to="/reviews" text-align="center"> 0 Reviews</Link><br />
                        {/* <Route path="/reviews" /> */}
                        <Button type="primary" align="center">
                        <Link to={{pathname: '/details', product: product.product_id}}> Buy/Rent</Link>
                        {/* <Route path="/details" component={Details} /> */}
                         </Button>
                     </div>
                     </Card>
             </Col> 
             ))}
             </Row>
             </div>
            //  </BrowserRouter>
             )
        }
    };
  };
     
export default Home;