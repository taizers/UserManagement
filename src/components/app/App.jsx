import './App.css';
import Main from '../main/Main';
import ErrorPage from '../error-page/ErrorPage';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Redaction from '../popup/redaction/Redaction';
import { pathLinks } from '../../consts';

const App = () => {
  return <Routes>
      <Route path = {pathLinks.home} element={<Main />} />
      <Route path = {pathLinks.redaction} element={<Redaction />} />
      <Route path = {pathLinks.error} element={<ErrorPage />} />
      <Route path = "/" element={<Navigate replace to={pathLinks.home} />} />
      <Route path = "*" element={<Navigate replace to={pathLinks.error} />} />
    </Routes>
};

export default App;
