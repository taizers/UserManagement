import './App.css';
import Main from '../main/Main';
import Popup from '../popup/Popup';
import ErrorPage from '../error-page/ErrorPage';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Redaction from '../popup/redaction/Redaction';
import { pathLinks } from '../../consts';

/* 
const onError = (errorMessage) => {
  console.log(errorMessage);
};

const getServerData = (onLoad, onError, url) => {
  console.log("++++++++++++++++++++++++");
  fetch(url)
    .then(respons => respons.json())
    .then(data => { onLoad(data) })
    .catch(err => onError(err))
}; */


const App = () => {
  /* 
  let [isData, setData] = useState(false);
  let [isUrl, setUrl] = useState("https://reqres.in/api/users?page=1");

  const onLoad = (data) => {
    setData(isData = data);
  };
  
  const onSetUrl = (pageNumber) => {
    pageNumber = "https://reqres.in/api/users?page=" + pageNumber;
    setUrl(isUrl = pageNumber);
    console.log(isUrl + "ffffffffffffffffffffffffffffffffffff"); 
    getServerData(onLoad,onError,isUrl);
  }; */
/* 
  if (!isData) {
    getServerData(onLoad,onError,isUrl);
  } */
  
  return <Routes>
      <Route path = {pathLinks.home} element={<Main />} />
      <Route path = {pathLinks.popup} element={<Popup  />} />
      <Route path = {pathLinks.redaction} element={<Redaction />} />
      <Route path = {pathLinks.error} element={<ErrorPage />} />
      <Route path = "/" element={<Navigate replace to={pathLinks.home} />} />
      <Route path = "*" element={<Navigate replace to={pathLinks.error} />} />
    </Routes>
};

export default App;





