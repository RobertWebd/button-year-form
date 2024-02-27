import { Route, Routes } from 'react-router-dom';
import { ButtonPage, FormPage, YearPage } from './pages';
import { Layout } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ButtonPage />}></Route>
        <Route path="/form" element={<FormPage />}></Route>
        <Route path="/year" element={<YearPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
