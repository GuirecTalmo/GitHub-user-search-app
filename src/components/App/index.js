import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Card from 'src/components/Card';
import Message from 'src/components/Message';

function App() {
  const [dataApi, setDataApi] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('Searching for someone ?');
  const [displayCard, setDisplayCard] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(true);

  const getAllDatas = async () => {
    setMessage('Please wait');
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setDataApi(response.data);
      setMessage('');
      setDisplayCard(true);
      setDisplayMessage(false);
    }
    catch (error) {
      setDisplayCard(false);
      setDisplayMessage(true);
      setMessage('Nope ! This is an absolute failure...');
      console.error(error);
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchBar username={username} setUsername={setUsername} getAllDatas={getAllDatas} />
      {displayMessage && <Message message={message} displayMessage={displayMessage} />}
      {displayCard && <Card ListOfDatas={dataApi} message={message} displayCard={displayCard} />}
    </div>
  );
}

export default App;
