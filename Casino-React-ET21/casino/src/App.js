import './App.css';
import axios from 'axios';
import UserCard from './components/Card.js';
import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import UserForm from './components/Form';


function App() {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:3001/usuarios',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : {}
    };

    axios(config).then(function (response) {
      console.log("Recibido de la Api: ", response.data.response)
      setCards(response.data.response);
    }).catch(function (error) {
      console.log(error);
  });
  }, [])

  const CardsUsuarios = cards.map((cards) => {
    return <UserCard id={cards.id} nombre={cards.Nombre} mail={cards.Mail} balance={cards.Balance}/>
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <div class="menu">
          <img id="logo" src='https://static.casino.guru/pict/169759/3986_500x250_dark.png?timestamp=1653447966000&imageDataId=210277&height=160' alt=""/>
        </div>
      </header>
      <div class="userCards">
        {CardsUsuarios}
      </div>
      <div class="userForm">
        <UserForm/>
      </div>
    </div>
  );
}

export default App;
