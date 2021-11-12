import './App.css';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Popup from '../components/popup/Popup';
import { useState } from 'react';

const getPopupCard = (isActivPopup, cards) =>{
  if (isActivPopup) {
    for (const item of cards) {
      if (item.id === isActivPopup) {
        return item;
      }
    }
  }
};

const onError = (errorMessage) => {
  /* const modal = document.querySelector(".popup");
  clearHTMLItem(modal);
  modal.insertAdjacentElement("beforeEnd", renderElement(getErrorSample(errorMessage)));
  modal.classList.add("popup--active"); */
  console.log(errorMessage);
};

const getServerData = (onLoad, onError, url) => {
  console.log("++++++++++++++++++++++++");
  fetch(url)
    .then(respons => respons.json())
    .then(data => { onLoad(data) })
    .catch(err => onError(err))
};


function App() {
  let [isPopupActiv, setPopupActiv] = useState(false);
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
  };

  if (!isData) {
    getServerData(onLoad,onError,isUrl);
  }

  const onChangePopup = (id) =>{
    setPopupActiv(isPopupActiv = id); 
  };
  
  if (isData) {
    return (
      <section className="social-network-app">
        <Header />
        <Main data = {isData} onChangePopup = {onChangePopup} onSetUrl ={onSetUrl}/>
        <Popup data = {getPopupCard(isPopupActiv, isData.data)} onChangePopup = {onChangePopup}/>
      </section>
    );
  }else
  return "";
 
};

export default App;





