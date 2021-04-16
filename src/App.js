import './App.css';
import EssayForm from './Forms/Docs/EssayForm';
import FlavorForm from './Forms/Docs/FlavorForm';
import HandleMultiInputs from './Forms/Docs/HandleMultiInputs';
import NameForm from './Forms/Docs/NameForm';
import FirstForm from './Forms/Formik/FirstForm';

function App() {
  return (
    <div className="App">
      {/* ========Docs=========== */}
      {/* <NameForm />
      <br/>
      <EssayForm />
      <br/>
      <FlavorForm />
      <br/>
      <HandleMultiInputs /> */}
      {/* ============ Formik ============= */}
      <FirstForm />
    </div>
  );
}

export default App;
