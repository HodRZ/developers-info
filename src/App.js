import './App.css';
import DevContextProvider from './components/DevContext';
import DeveloperForm from './components/DeveloperForm';
import DeveloperList from './components/DeveloperList';

function App() {
  return (
    <div className="App">
      <h1>Hey Dev!</h1>
      <DevContextProvider>
        <DeveloperForm />
        <DeveloperList />
      </DevContextProvider>

    </div>
  );
}

export default App;
