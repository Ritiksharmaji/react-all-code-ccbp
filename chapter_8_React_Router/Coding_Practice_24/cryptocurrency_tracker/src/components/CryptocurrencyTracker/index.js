import { Component } from 'react';
import { Rings } from 'react-loader-spinner'; // Import the Rings loader
import CryptocurrenciesList from '../CryptocurrenciesList'; // Import the child component
import './index.css'; // Make sure you have a common CSS file

class CryptocurrencyTracker extends Component {
  state = { isLoading: true };

  componentDidMount() {
    // Simulate a loading time before displaying the content
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000); // Adjust the timeout as per your preference
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="CryptocurrencyTracker-container">
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            {/* Display loader while loading the page */}
            <Rings color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          // After loading, display the CryptocurrenciesList
          <div className="cryptocurrency-list-container">
            <CryptocurrenciesList />
          </div>
        )}
      </div>
    );
  }
}

export default CryptocurrencyTracker;
