import './App.css';
import Counter from './components/Counter/Counter';
import Greeting from "./components/Greeting/Greeting"
import UserInfo from "./components/UserInfo/UserInfo"
function App() {
  return (
    <>
    <Counter/>
    <Greeting name="Михаил"/>
    <UserInfo name="Михаил"/>
    </>
  );
}

export default App;
