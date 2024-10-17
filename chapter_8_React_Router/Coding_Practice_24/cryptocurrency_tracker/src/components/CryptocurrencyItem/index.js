import './index.css';

const CryptocurrencyItem = props => {
  const { eachCurrency } = props;
  const { CurrencyLogo, CurrencyName, EuroValue, UsdValue } = eachCurrency;

  return (
    <li className="CryptocurrencyItem-order-list">
      <div className="CryptocurrencyItem-order-list-logo-name">
        <img src={CurrencyLogo} className="currency-logo" alt={CurrencyName} />
        <p className="paragraph">{CurrencyName}</p>
      </div>
      <p className="paragraph">{UsdValue}</p>
      <p className="paragraph">{EuroValue}</p>
    </li>
  );
};

export default CryptocurrencyItem;
