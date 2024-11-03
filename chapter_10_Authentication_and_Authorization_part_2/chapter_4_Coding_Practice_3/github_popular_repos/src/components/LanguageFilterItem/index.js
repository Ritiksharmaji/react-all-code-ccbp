import './index.css';

const LanguageFilterItem = (props) => {
  const { data, onClick } = props;
  const { id, language } = data;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <button className="order-list-card" onClick={handleClick}>
      {language}
    </button>
  );
};

export default LanguageFilterItem;
