import React from 'react';
import { Card, Button, Rate } from 'antd';
import Axios from 'axios';


class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      rentSuccess: '',
      buySuccess: ''
    }}

    componentDidMount() {
      Axios.get(`http://localhost:5000/details/${this.props.location.product}`)
      .then(res => {
        this.setState({
        products: res.data
      })})
      .catch(e => console.log(e))
    }


  
  handleRent = () => {
    console.log(this.state.products[0].product_id);
    let product_id = this.state.products[0].product_id;
    console.log(product_id);
    Axios.post(`http://localhost:5000/rent/${product_id}`)
    .then(res => {
      console.log(res);
      this.setState({
      rentSuccess : res.data.rent
      })})
    .catch(e => console.log(e));
  }

  handleBuy = () => {
    let product_id = this.state.products[0].product_id;
    Axios.post(`http://localhost:5000/buy/${product_id}`)
    .then(res => {
      this.setState({
      buySuccess : res.data.buy
      })})
    .catch(e => console.log(e));
  }


  render() {
    const { products, rentSuccess, buySuccess} = this.state;
      return(
            <div className="App"> 
            {products.map(product => (
              <Card style={{ width: 400 }} bodyStyle={{ padding: 30 }}>
              <div className="custom-image">
              <img alt="example" width="100%" src={product.image}/>
              </div>
              <div className="custom-card">
              <h3>{product.name}</h3>
              <p>Rs.{product.price}</p>
              <p> {product.address}</p>
              <p>{product.description}</p>
              <Rate allowHalf defaultValue={3.5} /><br/>
              <Button type="primary" onClick={this.handleRent}> Rent </Button>
              <Button type="primary" onClick={this.handleBuy}> Buy </Button>
              <div>{rentSuccess}</div>
              <div>{buySuccess}</div>
              </div>
              </Card>
            ))}
        </div>

      )
  }
}
export default Details;