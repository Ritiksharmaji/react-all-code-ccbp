import CashWithdrawal from './components/CashWithdrawal';
import './App.css';

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
];

const CashApp = () => <CashWithdrawal denominationsList={denominationsList} />;

export default CashApp;
