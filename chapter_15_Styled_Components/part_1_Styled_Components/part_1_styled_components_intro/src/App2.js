import "./App.css";
import { CustomButton } from "./styledComponent";

const App2 = () => (
  <>
    <CustomButton type="button" outline={false}>Click</CustomButton>
    <CustomButton type="button" outline={true}>Click</CustomButton>

    <CustomButton type="button">without-outline</CustomButton>
    <CustomButton type="button" outline>with-outline</CustomButton>
  </>
);

export default App2;