import React, { Component } from 'react';
import api from './api';
import Header from './Header';

class App extends Component {
  state = {
    batons: []
  };

  async componentDidMount(){
    const response = await api.get('');

    this.setState({batons: response.data});
  }
  render() {
    const {batons} = this.state;
      return(
        <div>
            <Header />
            {batons.map(batom => {
              return (
              <li key={batom.id}>
                <p><b>Nome:</b> {batom.name}</p>
                <p><b>Marca:</b> {batom.brand}</p>
                <p><b>Preço:</b> {batom.price}{batom.price_sign}{batom.currency}</p>
                <p><b>Imagem:</b> {batom.image_link}</p>
                <p><b>Link do produto:</b> {batom.product_link}</p>
              </li>);
            })}
        </div>
      );
    };
  };

  export default App;
