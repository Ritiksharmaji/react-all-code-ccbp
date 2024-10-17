import { Component } from 'react';
import CryptocurrencyItem from '../CryptocurrencyItem'; // Import your item component
import './index.css';

class CryptocurrenciesList extends Component {
  state = { CryptoCurrencysData: [] };

  componentDidMount() {
    this.getBlogsData();
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/crypto-currency-converter');
    const data = await response.json();
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      CurrencyLogo: eachItem.currency_logo,
      CurrencyName: eachItem.currency_name,
      EuroValue: eachItem.euro_value,
      UsdValue: eachItem.usd_value,
    }));

    this.setState({ CryptoCurrencysData: formattedData });
  };

  render() {
    const { CryptoCurrencysData } = this.state;

    return (
      <div className="CryptocurrenciesList-container">
        <h1 className="CryptocurrenciesList-container-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="cryptocurrency-list-image"
          alt="cryptocurrency"
        />
        <div className="cryptocurrency-card-container">
          <div className="cryptocurrency-sub-headings">
            <p>Coin Type</p>
            <p>USD</p>
            <p>EURO</p>
          </div>
          <ul className="cryptocurrency-unordered-list">
            {CryptoCurrencysData.map(eachCurrency => (
              <CryptocurrencyItem key={eachCurrency.id} eachCurrency={eachCurrency} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CryptocurrenciesList;
