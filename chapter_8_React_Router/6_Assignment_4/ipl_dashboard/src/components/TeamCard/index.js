import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  console.log(teamDetails)

  // Ensure teamData is defined before destructuring
  if (!teamDetails) {
    return null
  }

  const {name, id, teamImageURL} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
