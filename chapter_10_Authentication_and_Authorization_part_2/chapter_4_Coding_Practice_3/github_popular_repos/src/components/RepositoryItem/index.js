import './index.css';

const RepositoryItem = (props) => {
  const { data } = props;
  const {
    avatar_url,
    forks_count,
    issues_count,
    name,
    stars_count,
  } = data;

  const starImg = 'https://assets.ccbp.in/frontend/react-js/stars-count-img.png';
  const forksImg = 'https://assets.ccbp.in/frontend/react-js/forks-count-img.png';
  const issuesImg = 'https://assets.ccbp.in/frontend/react-js/issues-count-img.png';

  return (
    <li className="repo">
      <div className="card-repo">
        <img src={avatar_url} className="avatar" alt="avatar" />
        <h2 className="card-repo-heading">{name}</h2>
        
        <div className="repo-stats">
          <p className="repo-stat">
            <img src={starImg} className="card-repo-icon" alt="stars" />
            {stars_count} Stars
          </p>
          <p className="repo-stat">
            <img src={forksImg} className="card-repo-icon" alt="forks" />
            {forks_count} Forks
          </p>
          <p className="repo-stat">
            <img src={issuesImg} className="card-repo-icon" alt="open issues" />
            {issues_count} Open Issues
          </p>
        </div>
      </div>
    </li>
  );
};

export default RepositoryItem;
