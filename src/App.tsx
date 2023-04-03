import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import FormPage from './pages/FormPage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/form' element={<FormPage />} />
    </Routes>
    </div>
  );
}

export default App;
