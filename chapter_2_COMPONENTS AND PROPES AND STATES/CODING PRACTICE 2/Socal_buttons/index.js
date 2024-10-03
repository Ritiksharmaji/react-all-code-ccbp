const Button = props => {
  //  Write your code here.
  const { name, className } = props
  return (
    <Button type='submit' className={`button${className}`}>
      {name}
    </Button>
  )
}

const element = (
  //  Write your code here.
  <div className='button-container'>
    <h1 className='button-heading'>Socal Buttons </h1>
    <Button name='Like' className='like-button' />
    <Button name='Comments' className='like-button' />
    <Button name='Share' className='like-button' />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
