import './App.css';
import EssayForm from './Forms/Docs/EssayForm';
import FlavorForm from './Forms/Docs/FlavorForm';
import HandleMultiInputs from './Forms/Docs/HandleMultiInputs';
import NameForm from './Forms/Docs/NameForm';

function App() {
  return (
    <div className="App">
      <NameForm />
      <br/>
      <EssayForm />
      <br/>
      <FlavorForm />
      <br/>
      <HandleMultiInputs />
    </div>
  );
}

export default App;
