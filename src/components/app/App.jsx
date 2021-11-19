import './App.css';
import Main from '../Main/Main';
import ErrorPage from '../ErrorPage/ErrorPage';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import RedactionContainer from '../RedactionContainer/RedactionContainer';
import { pathLinks } from '../../consts';

const App = () => {
  return <Routes>
    <Route path={pathLinks.home} element={<Main />} />
    <Route path={pathLinks.redaction} element={<RedactionContainer />} />
    <Route path={pathLinks.error} element={<ErrorPage />} />
    <Route path="/" element={<Navigate replace to={pathLinks.home} />} />
    <Route path="*" element={<Navigate replace to={pathLinks.error} />} />
  </Routes>
};

export default App;
