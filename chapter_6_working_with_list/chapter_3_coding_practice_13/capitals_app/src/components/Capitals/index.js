import { Component } from 'react';
import './index.css';

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
];

// Write your code here

class Capitals extends Component {
  state = {
    cityName: countryAndCapitalsList[0].id,
  };

  // to update the id of city
  updateCity = (event) => {
    this.setState({ cityName: event.target.value });
  };

  getCityname = () => {
    const { cityName } = this.state;
    const findCityName = countryAndCapitalsList.find(
      (eachCity) => eachCity.id === cityName
    );
    return findCityName;
  };

  render() {
    const findCityObject = this.getCityname();
    const { capitalDisplayText, country } = findCityObject;

    return (
      <>
        <div className="city-country-container">
          <div className="card-city-country-container">
            <h1 className="heading-city-country">Countries and Capitals</h1>

            <div className="list-of-capitals-container">
              <p>
                <select
                  id="capital"
                  value={this.state.cityName}
                  onChange={this.updateCity}
                >
                  {countryAndCapitalsList.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.capitalDisplayText}
                    </option>
                  ))}
                </select>
              </p>
              <p>is capital of which country?</p>
            </div>

            <p className="country-paragraph">{country}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Capitals;
