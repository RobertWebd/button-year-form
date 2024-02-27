import { Route, Routes } from 'react-router-dom';
import { ButtonPage, FormPage, YearPage } from './pages';
import { Layout } from './components';

function App() {
  return (
    <Routes>
      <Route path="/button-year-form" element={<Layout />}>
        <Route path="/button-year-form" element={<ButtonPage />}></Route>
        <Route path="/button-year-form/form" element={<FormPage />}></Route>
        <Route path="/button-year-form/year" element={<YearPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
