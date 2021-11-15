import './App.css';
import Main from '../main/Main';
import Popup from '../popup/Popup';
import PropTypes from 'prop-types';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Redact from '../popup/redact/Redact';
import { pathLinks } from '../../consts';
import { connect } from 'react-redux';

const getPopupCard = (currentActivPopup, cards) =>{
  for (const item of cards) {
    if (item.id === currentActivPopup) {
      return item;
    }
  }
};
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


const App = (props) => {

  const { data, currentActivePupup } = props;
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
      <Route path = {pathLinks.home} element={<Main data = {data} />} />
      <Route path = {pathLinks.popup} element={<Popup data = {getPopupCard(currentActivePupup, data)} />} />
      <Route path = {pathLinks.redaction} element={<Redact data = {getPopupCard(currentActivePupup, data)} />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
};

App.propTypes = {
  data: PropTypes.arrayOf(Object),
  currentActivePupup: PropTypes.number.isRequired
};

const mapStateToProps = (state,ownProps) => {
  return Object.assign({}, ownProps, {
      currentActivePupup : state.currentActivePupup 
  });
};

const mapDispathToProps = (dispath) => {
  return {}
};

export default connect(mapStateToProps, mapDispathToProps)(App);





