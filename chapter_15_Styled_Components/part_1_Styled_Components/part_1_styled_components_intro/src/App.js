// import './App.css'

// const App = () => <h1 className="heading">Hello World</h1>

// export default App
import "./App.css";
import App2 from "./App2";
import { Heading , CustomButton} from "./styledComponent";

const App = () => {

  return(
    <>
    
    <Heading>Hello World</Heading>
    <CustomButton type="button" color="#ffffff" bgColor="#0070c1">Click</CustomButton>
  <CustomButton type="button" color="#0070c1" bgColor="#ffffff">Click</CustomButton>

  <h1>this is second app with Conditional Styling using Props </h1>
  <App2/>
</>
  )

}

export default App;
