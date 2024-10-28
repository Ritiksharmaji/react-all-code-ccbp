import './index.css'

const SocialButton = props => {
  console.log(props)
  return <button className="social-button">
    {props.children}
    </button>
}

export default SocialButton
