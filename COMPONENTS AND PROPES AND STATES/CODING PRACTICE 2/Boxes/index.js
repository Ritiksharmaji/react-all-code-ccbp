const Box = props => {
  //  Write your code here.
  const { text } = props
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div class='boxex-contianer'>
    <h1 className='boxes-heading'>Boxes</h1>
    <div className='box-card'>
      <Box text='small' />
      <Box text='Medium' />
      <Box text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
